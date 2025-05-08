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
  const position: [number, number] = [39.748427, -75.54772]; // New York City coordinates

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
            <h3 className="font-medium">1007 N Orange St.</h3>
          </div>
          <p className="text-xs text-muted">
            4th Floor Suite #4204 Wilmington, Delaware
            <br />
            19801, USA
          </p>
          <Link
            href="https://www.google.com/maps/place/Orange+St,+Wilmington,+DE/@39.748427,-75.54772,405679m/data=!3m1!1e3!4m6!3m5!1s0x89c6fd41d1a737f9:0x3436f2a9a66570da!8m2!3d39.7439389!4d-75.5505349!16s%2Fg%2F1v_w39pt?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D"
            className="text-xs pt-2 text-muted text-[#1A73E8] hover:underline"
          >
            View larger map
          </Link>
        </div>
        <div className="flex items-center flex-col gap-1 text-[#1A73E8] hover:underline">
          <FontAwesomeIcon className="text-2xl" icon={faLocationArrow} />
          <Link
            href="https://www.google.com/maps/dir//Orange+St,+Wilmington,+DE,+USA/@39.748427,-75.54772,443378m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x89c6fd41d1a737f9:0x3436f2a9a66570da!2m2!1d-75.5505349!2d39.7439389?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D"
            className="text-xs"
          >
            Directions
          </Link>
        </div>
      </div>
    </div>
  );
}
