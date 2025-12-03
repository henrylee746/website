"use client";

import {
  RelativeTime,
  RelativeTimeZone,
  RelativeTimeZoneDate,
  RelativeTimeZoneDisplay,
  RelativeTimeZoneLabel,
} from "@/components/kibo-ui/relative-time";

const timezones = [
  { label: "Toronto", zone: "America/New_York" },
  { label: "London", zone: "Europe/London" },
  { label: "Seoul", zone: "Asia/Tokyo" },
];

const TimeZones = () => (
  <div className="rounded-md border bg-background p-2 sm:p-4">
    <RelativeTime>
      {timezones.map(({ zone, label }) => (
        <RelativeTimeZone key={zone} zone={zone}>
          <RelativeTimeZoneLabel>{label}</RelativeTimeZoneLabel>
          <RelativeTimeZoneDate />
          <RelativeTimeZoneDisplay />
        </RelativeTimeZone>
      ))}
    </RelativeTime>
  </div>
);

export default TimeZones;
