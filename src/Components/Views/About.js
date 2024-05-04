import React from "react";

function About() {
  return (
    <div className="container-fluid mx-auto ml-10 p-5 ">
      <div>
        <div className="mx-auto flex flex-col mt-5  items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-700 w-2/3">Nick Haralabidis</h1>
          <h3 className="text-xl mt-5 text-gray-700 w-2/3 ">Painter</h3>
        </div>
      </div>
      <div className="text-left mt-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl text-blue-900 w-2/3 text-left font-semibold">
            Hello! My name is Nick Haralabidis.
          </h1>

          <p className="text-lg mt-10 w-2/3 text-gray-600 leading-8">
            Born in Piraeus in 1957. Graduated from the Law School of the
            University of Athens. Registered in the registers of the Piraeus Bar
            Association since 1984. He practices as a lawyer until today and
            maintains a law office in Piraeus. He speaks the English language.
          </p>
          <p className="text-lg w-2/3 text-gray-600 leading-8">
            "I've been painting since I can remember." I am self-taught, with a
            study of painting techniques and more general subjects of painting
            and history, both of the art of painting and international painters.
            The guide in my art is initially realism "tied" with naturalistic
            detail, combined with an impressionistic or even surreal tendency.
          </p>

          <p className="text-lg w-2/3 text-gray-600 leading-8">
            My personal perception is that this way of rendering painting in
            modern times gives a pioneering and special aesthetic pleasure to
            the human eye and soul, at least as I seek it. I use high quality
            water soluble as well as non-water soluble materials from an
            extensive range (Faber-Castell, Bruynzeel, Castle, Nyoni, Caran
            D'ache, Tombow Irojiten, Karat Staedtler, Sennelier, Rubens, Van
            Gogh, Sergeant, and but). In my understanding there are no
            restrictions on the types of both the painting media and the
            painting object.
          </p>

          <p className="text-lg w-2/3 text-gray-600 leading-8">
            Painting is a personal, but also an internal need for expression, it
            is an inherent and inalienable element of the individual psyche of
            the painter who sees everything around him "with different eyes" and
            knows no obstacle to the desired painting result".
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
