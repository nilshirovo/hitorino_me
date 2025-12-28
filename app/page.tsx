export default function Home() {
  const links = [
    { title: "GitHub", url: "https://github.com/nilshirovo" },
    { title: "Twitter", url: "https://twitter.com" },
    { title: "Discord", url: "https://discord.com" },
    { title: "Blog", url: "/blog" },
    { title: "Contact", url: "mailto:contact@example.com" },
  ];

  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <div className="max-w-2xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">hitorino.me</h1>
          <p className="text-gray-600">a minimal links page</p>
        </div>

        {/* Links Section */}
        <div className="space-y-0 border border-black">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : "_self"}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : ""}
              className="block px-4 py-3 border-b border-black last:border-b-0 hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="text-base">{link.title}</span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-sm text-gray-500">
          <p>© 2025. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
