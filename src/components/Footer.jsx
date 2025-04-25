import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li>About</li>
            <li>Careers</li>
            <li>Advertise</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1">
            <li>Events</li>
            <li>Magazine</li>
            <li>Podcasts</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <ul className="space-y-1">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6 text-xs">&copy; {new Date().getFullYear()} IndiaRetailing. All rights reserved.</div>
    </footer>
  );
}