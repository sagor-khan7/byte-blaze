export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-100 shadow-lg text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          ByteBlaze
        </p>
      </aside>
    </footer>
  );
}
