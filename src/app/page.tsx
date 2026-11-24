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
    <Link href="/layer02"><button className="btn">click me!</button></Link>
    </div>
    <div className="aura aura-rainbow">
  <div className="card bg-base-100">
    <div className="card-body">
      <p>This card has aura</p>
    </div>
  </div>
</div>
<div className="hover-3d">
  {/* content */}
  <figure className="w-60 rounded-2xl">
    <img src="https://jrhj4wz4ow.ufs.sh/f/5MM7H1ds6zxa0aik9yZyWtMi4gNaoUR836kvwnEdXcjLepH5" alt="Tailwind CSS 3D card" />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
    </main>
  );
}
