export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-8 text-center">
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Lucas Vicente
      </p>
    </footer>
  );
}