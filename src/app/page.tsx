import Link from "next/link";
const mockUrls = ["https://jrhj4wz4ow.ufs.sh/f/5MM7H1ds6zxa5ru8tws6zxatiGsS83AB1wnoJvUDrP2Z0bqR", "https://jrhj4wz4ow.ufs.sh/f/5MM7H1ds6zxa0aik9yZyWtMi4gNaoUR836kvwnEdXcjLepH5", "https://jrhj4wz4ow.ufs.sh/f/5MM7H1ds6zxab0mAHRd0DjIEhcnmCieztrG4FpYk8lQxqHfA", "https://jrhj4wz4ow.ufs.sh/f/5MM7H1ds6zxagliIyBSukzC8yY27U0Hu6msV9KbZS1GDqfix"]
const mockImages = mockUrls.map ((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
    <div className="bg-[url(/img/https://jrhj4wz4ow.ufs.sh/f/5MM7H1ds6zxagliIyBSukzC8yY27U0Hu6msV9KbZS1GDqfix)] ...">
    
    </div>
    <div className="flex flex-wrap gap-4">{
      mockImages.map((image) => (
        <div key ={image.id} className="w-48">
          <img className= "scale-125 ..." src={image.url} alt="image" />
        </div>
      ))
    }
    <p className="text-2x1 text-blue-600 underline decoration-dashed ...">Cheetah riding a bike!</p>
    <p className= "font-mono ..."> Lorem Ipsum</p>
    <Link href="/layer02">click me!</Link>
    </div>
    </main>
  );
}
