export default function Home() {
  const friends = [
    {
      name: "药丸",
      url: "https://ququq.moe/",
    },
    {
      name: "蓝猫",
      url: "https://dawn.moe/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/nilshiro",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-800 rounded-lg shadow-2xl p-8 border border-gray-700">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">nilshiro</h1>
            <p className="text-gray-400 text-sm">links</p>
          </div>

          {/* Friends Links */}
          <nav className="space-y-3">
            {friends.map((friend) => (
              <a
                key={friend.name}
                href={friend.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white text-center rounded-lg transition-colors duration-200 hover:text-blue-400"
              >
                {friend.name}
              </a>
            ))}
          </nav>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-xs">
              © 2025 nilshiro. minimalist links.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
