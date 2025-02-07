function GridView() {
  const courses = [
    {
      imageLink: "",
      reviews: 1,
      courseName: "React",
      totalLessons: 10,
      enrolledStudents: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde dolor voluptas iure dicta quos voluptatum deleniti quaerat cupiditate quo fugit quasi molestiae error culpa esse libero, veritatis accusamus recusandae dolorem optio perferendis! Sed, repudiandae porro.",
      price: "67",
      curPrice: "34.2",
      instructor: {
        imageLink: "",
        name: "Monika",
        field: "IT",
      },
    },
    {
      imageLink: "",
      reviews: 1,
      courseName: "React",
      totalLessons: 10,
      enrolledStudents: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde dolor voluptas iure dicta quos voluptatum deleniti quaerat cupiditate quo fugit quasi molestiae error culpa esse libero, veritatis accusamus recusandae dolorem optio perferendis! Sed, repudiandae porro.",
      price: "67",
      curPrice: "34.2",
      instructor: {
        imageLink: "",
        name: "Monika",
        field: "IT",
      },
    },
    {
      imageLink: "",
      reviews: 1,
      courseName: "React",
      totalLessons: 10,
      enrolledStudents: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde dolor voluptas iure dicta quos voluptatum deleniti quaerat cupiditate quo fugit quasi molestiae error culpa esse libero, veritatis accusamus recusandae dolorem optio perferendis! Sed, repudiandae porro.",
      price: "67",
      curPrice: "34.2",
      instructor: {
        imageLink: "",
        name: "Monika",
        field: "IT",
      },
    },
    {
      imageLink: "",
      reviews: 1,
      courseName: "React",
      totalLessons: 10,
      enrolledStudents: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde dolor voluptas iure dicta quos voluptatum deleniti quaerat cupiditate quo fugit quasi molestiae error culpa esse libero, veritatis accusamus recusandae dolorem optio perferendis! Sed, repudiandae porro.",
      price: "67",
      curPrice: "34.2",
      instructor: {
        imageLink: "",
        name: "Monika",
        field: "IT",
      },
    },
    {
      imageLink: "",
      reviews: 1,
      courseName: "React",
      totalLessons: 10,
      enrolledStudents: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde dolor voluptas iure dicta quos voluptatum deleniti quaerat cupiditate quo fugit quasi molestiae error culpa esse libero, veritatis accusamus recusandae dolorem optio perferendis! Sed, repudiandae porro.",
      price: "67",
      curPrice: "34.2",
      instructor: {
        imageLink: "",
        name: "Monika",
        field: "IT",
      },
    },
    {
      imageLink: "",
      reviews: 1,
      courseName: "React",
      totalLessons: 10,
      enrolledStudents: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde dolor voluptas iure dicta quos voluptatum deleniti quaerat cupiditate quo fugit quasi molestiae error culpa esse libero, veritatis accusamus recusandae dolorem optio perferendis! Sed, repudiandae porro.",
      price: "67",
      curPrice: "34.2",
      instructor: {
        imageLink: "",
        name: "Monika",
        field: "IT",
      },
    },
  ];
  return (
    <div className="flex py-10 justify-center">
      <div className="w-full lg:max-w-6xl grid grid-cols-1 md:grid-cols-2bg-white gap-16 lg:grid-cols-3">
        {courses.map((course) => (
          <>
            <section className=" bg-white shadow-2xl p-6 rounded-2xl ">
              <img className=" w-full" src="/courses/course.png" alt="image" />
              <section>
                <span>{course.reviews} reviews</span>
              </section>
              <section>{course.courseName}</section>
              <section className="light text-sm fex justify-between">
                <section>{course.totalLessons} Lessons</section>
                <section>{course.enrolledStudents} Students</section>
              </section>
              <section>{course.description}</section>
              <section>
                <img src="" className="rounded h-14" alt="" />
                <span>
                  By {course?.instructor?.name} in {course?.instructor?.field}
                </span>
              </section>

              <section className="flex justify-between">
                <section>
                  <s>${course.price} </s>
                  <span className="text-xl"> ${course.curPrice}</span>
                </section>
                <section className="cursor-pointer">Add to cart</section>
              </section>
            </section>
          </>
        ))}
      </div>
    </div>
  );
}

export default GridView;
