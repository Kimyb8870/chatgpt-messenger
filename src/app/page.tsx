import { SunIcon } from "@heroicons/react/24/outline";
import { BoltIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <div>
              <SunIcon className="h-8 w-8" />
            </div>
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="info-text">{`"Explane quantum computing in simple terms"`}</p>
            <p className="info-text">{`"Got any creative ideas for a 10 year old's birtday?"`}</p>
            <p className="info-text">{`"How do I make an HTTP request in Javascript?"`}</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <div>
              <BoltIcon className="h-8 w-8" />
            </div>
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="info-text">{`"Remember what user said earlier in the conversation"`}</p>
            <p className="info-text">{`"Allows user to provide follow-up corrections"`}</p>
            <p className="info-text">{`"Trained to decline inappropriate requests"`}</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <div>
              <ExclamationTriangleIcon className="h-8 w-8" />
            </div>
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="info-text">{`"May occationally generate incorrect information"`}</p>
            <p className="info-text">{`"May occasionally produce harmful instfuctions or biased content"`}</p>
            <p className="info-text">{`"Limited knowledge of world and events after 2021"`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
