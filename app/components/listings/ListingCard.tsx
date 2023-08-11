"use client";

import {
  ModifiedListing,
  ModifiedReservations,
  ModifiedUser,
} from "../../types/type";
import { useRouter } from "next/navigation";
import useCountries from "../../hooks/useCountries";
import { useCallback, useMemo } from "react";
import { format } from "date-fns";
import Image from "next/image";
import HeartButton from "../HeartButton";
import Button from "../Button";

interface ListingCardProps {
  data: ModifiedListing;
  reservation?: ModifiedReservations;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: ModifiedUser | null;
}
const ListingCard = ({
  data,
  reservation,
  onAction,
  disabled,
  actionId = "",
  actionLabel,
  currentUser,
}: ListingCardProps) => {
  const router = useRouter();
  const { getByValue } = useCountries();
  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (disabled) return;

      onAction?.(actionId);
    },
    [onAction, actionId, disabled]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) return null;

    const startDay = new Date(reservation.startDate);
    const endDay = new Date(reservation.endDate);

    return `${format(startDay, "PP")} - ${format(endDay, "PP")}`;
  }, [reservation]);

  return (
    <div
      className="col-span-1 cursor-pointer group"
      onClick={() => router.push(`/listings/${data.id}`)}
    >
      <div className="aspect-square w-full relative overflow-hidden rounded-xl">
        <Image
          alt="Listing card"
          src={data.imageSrc}
          className="w-full h-full object-cover group-hover:scale-110 transtion"
          fill
        />
        <div className="absolute top-3 right-3">
          <HeartButton listingId={data.id} currentUser={currentUser} />
        </div>
      </div>
      <div className="font-semibold text-lg mt-1">
        {location?.label}, {location?.region}
      </div>
      <div className="font-light text-neutral-500">
        {reservationDate || data.category}
      </div>
      <div className="flex flex-row items-center gap-1">
        <div className="font-semibold ">${price}</div>
        {!reservation && <div className="font-light">/ night</div>}
      </div>
      {onAction && actionLabel && (
        <Button
          disabled={disabled}
          small
          label={actionLabel}
          onClick={handleCancel}
        />
      )}
    </div>
  );
};

export default ListingCard;
