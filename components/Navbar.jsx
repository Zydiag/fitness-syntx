import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="bg-secondary w-full h-16">
      <div className="flex items-center h-full">
        <Image src="https://via.placeholder.com/150" width={50} height={50} className=""  alt="" />
      </div>
    </nav>
  )
}
export default Navbar