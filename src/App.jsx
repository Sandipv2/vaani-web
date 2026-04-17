import logo from "./assets/images/vaani_logo.png";
import poster from "./assets/images/vaani-poster.png";

const DOWNLOAD_URL =
  "https://www.mediafire.com/file/bvrprt8sx56nuro/vaani-v1.2.0.apk/file";

const features = [
  "Post text",
  "Post images or videos",
  "Like posts",
  "Comment",
  "Delete posts",
];
const installSteps = [
  "Click on Download button.",
  "Download the latest Vaani APK to your Android phone.",
  "Open the APK file and allow installs from your browser or file manager if Android asks.",
  "Tap Install, then open Vaani after setup finishes.",
];

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between">
          <div className="rounded-full bg-white px-3 py-2">
            <img src={logo} alt="Vaani" className="h-6 w-auto sm:h-8" />
          </div>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Download APK
          </a>
        </header>

        <section className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-12 lg:py-14">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
              Android social app
            </p>
            <h1 className="text-5xl font-semibold leading-none tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Vaani
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-white/70 sm:text-xl">
              A clean social app.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/75"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Download for Android
              </a>
            </div>
          </div>

          <div id="preview" className="flex justify-center lg:justify-end">
            <img
              src={poster}
              alt="Vaani poster"
              className="h-auto max-h-[70vh] w-full max-w-2xl rounded-2xl object-contain"
            />
          </div>

          <div className="mt-10 max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
              How to install
            </p>
            <ol className="mt-4 space-y-3 text-sm leading-7 text-white/75 sm:text-base">
              {installSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-5 text-sm text-white/45">
          <a
            href="https://github.com/sandipv2"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white/70"
          >
            Built by sandipv2
          </a>
        </footer>
      </div>
    </main>
  );
}

export default App;
