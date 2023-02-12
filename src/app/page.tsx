import {SunIcon, BoltIcon, ExclamationTriangleIcon} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen px-2 text-white">
        <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

        <div className="flex space-x-2 text-center">

            <section>
                <div className="flex flex-col items-center justify-center mb-5">
                    <SunIcon className="w-8 h-8" />
                    <h2>Examples</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">
                        &quot;Explain something to me&quot;
                    </p>
                    <p className="infoText">
                        &quot;What is the difference between ad dog and a cat?&quot;
                    </p>
                    <p className="infoText">
                        &quot;What is the color of the sun?&quot;
                    </p>
                </div>
            </section>

            <section>
                <div className="flex flex-col items-center justify-center mb-5">
                    <BoltIcon className="w-8 h-8" />
                    <h2>Capabilities</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">
                        &quot;Change the ChatGTP model to use.&quot;
                    </p>
                    <p className="infoText">
                        &quot;Messages are stored in Firebase; Firestore.&quot;
                    </p>
                    <p className="infoText">
                        &quot;Hot toast notifications when ChatGTP is thinking!&quot;
                    </p>
                </div>
            </section>

            <section>
                <div className="flex flex-col items-center justify-center mb-5">
                    <ExclamationTriangleIcon className="w-8 h-8" />
                    <h2>Limitations</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">
                        &quot;May occasionally produce harmful instructions or biased content.&quot;
                    </p>
                    <p className="infoText">
                        &quot;May occasionally generate incorrect information.&quot;
                    </p>
                    <p className="infoText">
                        &quote;Limited knowledge of world events afgter 2021.&quot;
                    </p>
                </div>

            </section>

        </div>
    </main>
  )
}
