import { useEffect, useRef } from "react";

export function ClientShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const clients = [
    "Tata Motors", "Bajaj Finserv", "Zeiss", "Hindalco Industries",
    "Ashok Leyland", "Emaar", "Quinnox", "Zebpay",
    "Netradyne", "Infinite", "Trackwizz", "SK Finance",
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-12">
          Trusted by Leading Organizations
        </h3>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10"></div>
          
          <div
            ref={scrollRef}
            className="flex space-x-12 overflow-x-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-16 px-8"
                data-testid={`client-logo-${index}`}
              >
                <span className="text-xl font-semibold text-muted-foreground/60 whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
