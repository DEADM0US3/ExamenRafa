import React from "react";

function Footer() {
  return (
    <footer className="bg-[#C1DCDC] flex flex-col items-center justify-center z-50">
      <div className="flex mb-2 mt-4">
        <h1 className="text-bold text-4xl font-mono antialiased">GreenMex</h1>
      </div>
      <div className="border-b-2 border-slate-600 mb-4">
        <p className="text-lg mt-4 font-sans tracking-wide text-center">
          Somos una empresa comprometida al cuidado del medio ambiente. Las
          plantas son nuestras amigas.
        </p>
        <p className="text-lg mb-4 font-sans tracking-wider text-center">
          Danos una oportunidad y cambiemos el planeta por uno mas verde.
        </p>
      </div>
      <div>
        <p className="text-sm mb-8 text-gray-700 italic tracking-tight">
          All Rights Reserved - 2023{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
