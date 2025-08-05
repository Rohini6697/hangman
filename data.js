const wordList = [
  {
    word: "guitar",
    hint: "A musical instrument with strings."
  },
  {
    word: "oxygen",
    hint: "A colorless, odorless gas essential for life."
  },
  {
    word: "mountain",
    hint: "A large natural elevation of the Earth's surface."
  },
  {
    word: "painting",
    hint: "An art form using colors on a surface to create images or expression."
  },
  {
    word: "astronomy",
    hint: "The scientific study of celestial objects and phenomena."
  },
  {
    word: "computer",
    hint: "An electronic device for storing and processing data."
  },
  {
    word: "river",
    hint: "A natural flowing watercourse."
  },
  {
    word: "camera",
    hint: "A device used to take photographs or videos."
  },
  {
    word: "chocolate",
    hint: "A sweet treat made from cocoa."
  },
  {
    word: "calendar",
    hint: "A system for organizing days and months."
  },
  {
    word: "bicycle",
    hint: "A two-wheeled vehicle powered by pedaling."
  },
  {
    word: "library",
    hint: "A place where books are kept for reading or borrowing."
  },
  {
    word: "volcano",
    hint: "A mountain that erupts with lava and ash."
  },
  {
    word: "pyramid",
    hint: "A triangular structure built in ancient Egypt."
  },
  {
    word: "rainbow",
    hint: "A colorful arc in the sky caused by light and rain."
  },
  {
    word: "island",
    hint: "A piece of land surrounded by water."
  },
  {
    word: "mirror",
    hint: "A surface that reflects an image."
  },
  {
    word: "language",
    hint: "A system of communication using words or symbols."
  },
  {
    word: "gravity",
    hint: "The force that pulls objects toward Earth."
  },
  {
    word: "telescope",
    hint: "An instrument used to observe distant objects in space."
  },
  {
    word: "keyboard",
    hint: "A device used to input text into a computer."
  },
  {
    word: "planet",
    hint: "A celestial body that orbits a star."
  },
  {
    word: "pencil",
    hint: "A tool used for writing or drawing, often with an eraser."
  },
  {
    word: "ladder",
    hint: "A structure used to climb up or down, typically made of steps."
  },
  {
    word: "butterfly",
    hint: "An insect with colorful wings that undergoes metamorphosis."
  },
  {
    word: "jungle",
    hint: "A dense forest in a tropical region."
  },
  {
    word: "candle",
    hint: "A wax object with a wick that gives light when lit."
  },
  {
    word: "wallet",
    hint: "An item used to carry money and cards."
  },
  {
    word: "glacier",
    hint: "A large mass of ice that moves slowly over land."
  },
  {
    word: "puzzle",
    hint: "A game or problem that tests ingenuity or knowledge."
  },
  {
    word: "helmet",
    hint: "A protective head covering, often used for safety."
  },
  {
    word: "stadium",
    hint: "A large venue for sports and other public events."
  },
  {
    word: "cookie",
    hint: "A small sweet baked snack, often with chocolate chips."
  },
  {
    word: "whistle",
    hint: "A sound made by forcing air through lips or a small device."
  },
  {
    word: "desert",
    hint: "A dry, sandy region with very little rainfall."
  },
  {
    word: "rocket",
    hint: "A vehicle designed to travel into space."
  },
  {
    word: "hammer",
    hint: "A tool used to drive nails into wood or other materials."
  },
  {
    word: "magnet",
    hint: "An object that attracts certain metals using a magnetic field."
  },
  {
    word: "fossil",
    hint: "Preserved remains of ancient organisms found in rocks."
  },
  {
    word: "parachute",
    hint: "A device that slows down a fall from an aircraft."
  },
  {
    word: "compass",
    hint: "An instrument that shows direction using Earth's magnetic field."
  },
  {
    word: "umbrella",
    hint: "A handheld device used for protection from rain or sun."
  },
  {
    word: "violin",
    hint: "A small stringed instrument played with a bow."
  },
  {
    word: "crystal",
    hint: "A solid material whose atoms are arranged in a repeating pattern."
  },
  {
    word: "eclipse",
    hint: "An event where one celestial body blocks the light of another."
  },
  {
    word: "fountain",
    hint: "A structure that sends water into the air for decoration or drinking."
  },
  {
    word: "garden",
    hint: "A place where plants, flowers, and vegetables are grown."
  },
  {
    word: "harvest",
    hint: "The act of gathering crops from the fields."
  },
  {
    word: "igloo",
    hint: "A dome-shaped house made of snow, traditionally used by Inuit people."
  },
  {
    word: "jigsaw",
    hint: "A puzzle made of irregularly shaped pieces."
  },
  {
    word: "lantern",
    hint: "A portable light with a protective covering."
  },
  {
    word: "notebook",
    hint: "A book of blank pages used for writing notes."
  },
  {
    word: "octopus",
    hint: "A sea animal with eight arms and a soft body."
  },
  {
    word: "quartz",
    hint: "A common mineral often used in watches and electronics."
  },
  {
    word: "recycle",
    hint: "The process of converting waste into reusable material."
  },
  {
    word: "saddle",
    hint: "A seat fastened on a horse's back for riding."
  },
  {
    word: "triangle",
    hint: "A shape with three straight sides and three angles."
  },
  {
    word: "vaccine",
    hint: "A substance used to provide immunity against a disease."
  },
  {
    word: "zipper",
    hint: "A fastening device made of two strips with interlocking teeth."
  },
  {
  word: "shelter",
  hint: "A place giving temporary protection from bad weather or danger."
},
{
  word: "nebula",
  hint: "A cloud of gas and dust in space, often forming new stars."
},
{
  word: "compass",
  hint: "A navigational instrument that shows directions."
},
{
  word: "painter",
  hint: "A person who creates art using paint."
},
{
  word: "engine",
  hint: "A machine that converts energy into mechanical motion."
},
{
  word: "subway",
  hint: "An underground train system used in cities."
},
{
  word: "giraffe",
  hint: "The tallest land animal with a long neck."
},
{
  word: "wallet",
  hint: "An item for holding money and cards."
},
{
  word: "oxygen",
  hint: "An essential gas we breathe to stay alive."
},
{
  word: "asteroid",
  hint: "A small rocky body orbiting the sun, mostly found in the asteroid belt."
},
{
  word: "pencilcase",
  hint: "A container used to hold writing tools."
},
{
  word: "circuit",
  hint: "A path through which electricity flows."
},
{
  word: "meadow",
  hint: "A field of grass and flowers, often in the countryside."
},
{
  word: "festival",
  hint: "A day or period of celebration, often with food and music."
},
{
  word: "battery",
  hint: "A device that stores and provides electrical energy."
},
{
  word: "iceberg",
  hint: "A large mass of floating ice detached from a glacier."
},
{
  word: "squirrel",
  hint: "A small animal with a bushy tail that climbs trees."
},
{
  word: "satellite",
  hint: "An object that orbits a planet, often used for communication."
},
{
  word: "blender",
  hint: "An electric kitchen appliance used for mixing or puréeing food."
},
{
  word: "cabinet",
  hint: "A storage unit with shelves or drawers, often in kitchens."
}

];
