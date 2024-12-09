"use client";

export default function FooterBottom() {
  return (
    <footer className="w-full text-#000 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-2">
          {/* Credits */}
          <p className="text-sm color-#000">
            Designed and Developed by <span className="font-semibold">Pitamaas</span>
          </p>
          {/* Rights Reserved */}
          <p className="text-sm color-#000">
            &copy; {new Date().getFullYear()} Abram General Trading LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
