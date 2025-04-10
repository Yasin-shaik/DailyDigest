import CallToAction from "../components/CallToAction";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About DailyDigest
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to DailyDigest! This platform was built as a passion
              project to help readers stay informed with the latest news and
              trends — all in one place. Whether you're a tech enthusiast, a
              curious learner, or just someone looking to stay updated,
              DailyDigest has something for you.
            </p>

            <p>
              Here, you’ll find daily updates on current affairs, AI-powered
              summaries of important articles, and sentiment analysis to help
              you quickly understand the tone of the news. Our goal is to make
              news consumption faster, smarter, and more interactive for
              everyone.
            </p>

            <p>
              DailyDigest also encourages community interaction. Feel free to
              comment on articles, share your thoughts, and join the discussion
              with other readers. We believe that informed conversations help
              build a better world.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <CallToAction />
        </div>
      </div>
    </div>
  );
}
