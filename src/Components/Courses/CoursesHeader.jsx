export const CoursesHeader = () => {
  const totalCourses = 12;
  const loadedcourses = 6;
  return (
    <div className="py-28 dark-bg w-full flex justify-center ">
      <section className="w-full  lg:max-w-6xl">
        <section className="my-2">Home .Courses</section>
        <section>
          <span className="h1 heading dark my-2">All Courses </span>
          <span className="text-sm dark">{totalCourses} Courses</span>
        </section>
        <section className="my-2">
          Courses that help beginner designers become true unicorns.
        </section>
        <section className="flex justify-between my-2 ">
          <section className="my-2">
            <span>Grid</span>
            <span>List</span>
            <span className="text-sm mx-4">
              showing 1-{loadedcourses} of {totalCourses} results
            </span>
          </section>

          <section className="my-2">
            <input
              type="text"
              className="outline-white focus:outline-white bg-transparent border py-2 border-white px-4  rounded-3xl mx-4 "
              placeholder="Search Your Course"
            />
            <button className="bg-white font-black rounded-2xl cursor-pointer py-2 px-4">
              Filter
            </button>
          </section>
        </section>
      </section>
    </div>
  );
};
