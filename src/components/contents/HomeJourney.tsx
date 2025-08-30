"use client"
import InteractiveTimeline from "../ui/InteractiveTimeline";


export default function HomeJourney() {
    const bgtext = `void connectWiFi() {
            Serial.println("[wifi] connecting... success");
        } void sendTelemetry() {

            int temp = 42;
            Serial.printf("[telemetry] publishing { temp: %d }", temp);
        }`
    return (
        <section className="py-30">
            <div className="text-center flex items-center justify-center">
                <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#ba2025] to-black">Our Journey so Far...</h1>
            </div>
            <InteractiveTimeline text={bgtext}/>
        </section>
    )
}