import React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Event } from "@/data/types";

interface EventsListProps {
  events: Event[];
  title?: string;
}

export const EventsList: React.FC<EventsListProps> = ({
  events,
  title = "Upcoming Events",
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <SectionWrapper background="light" id="events">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
          {title}
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Stay updated with our exciting events and activities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id} hover>
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-12 h-12 bg-accent-3 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-accent-3 font-semibold">
                  {formatDate(event.date)}
                </p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">
              {event.title}
            </h3>
            <p className="text-text-muted text-sm">{event.description}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};
