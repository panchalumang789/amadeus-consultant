"use client";

import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon, map, Map, marker, tileLayer } from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { useEffect, useRef } from "react";

const fixLeafletIcon = () => {
  Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  });
};

export default function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<Map | null>(null);

  // Example coordinates - replace with your actual location
  const position: [number, number] = [40.7128, -74.006]; // New York City coordinates

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (mapRef.current && !mapInstanceRef.current) {
      fixLeafletIcon();

      const currMap = map(mapRef.current).setView(position, 13);
      mapInstanceRef.current = currMap;

      tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(currMap);

      marker(position).addTo(currMap).bindPopup("Our Location").openPopup();

      return () => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative h-full w-full">
      <div ref={mapRef} className="h-full w-full" />

      <div className="absolute flex gap-6 bottom-4 left-4 text-black bg-white py-2 px-4 rounded-xs shadow-md z-[1000] max-w-xs">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-medium">6321 N Campbell Ave</h3>
          </div>
          <p className="text-xs text-muted">
            6321 N Campbell Ave, Chicago, IL
            <br />
            60659, USA
          </p>
          <Link
            href="https://maps.google.com/maps?ll=41.997342,-87.68948&z=15&t=m&hl=en-US&gl=US&mapclient=embed&q=6321%20N%20Campbell%20Ave%20Chicago%2C%20IL%2060659%20USA"
            className="text-xs pt-2 text-muted text-[#1A73E8] hover:underline"
          >
            View larger map
          </Link>
        </div>
        <div className="flex items-center flex-col gap-1 text-[#1A73E8] hover:underline">
          <FontAwesomeIcon className="text-2xl" icon={faLocationArrow} />
          <Link
            href="https://maps.google.com/maps/dir//6321+N+Campbell+Ave+Chicago,+IL+60659+USA/@41.9965392,-87.6919966,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x880fd1ddef595f8b:0xe7c4c65220f4ed8b"
            className="text-xs"
          >
            Directions
          </Link>
        </div>
      </div>
    </div>
  );
}
