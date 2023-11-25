// Constructor function for Student details
function Student(name, roll_no, _class, section, marks_of_5_subjects) {
  this.name = name;
  this.roll_no = roll_no;
  this.class = _class;
  this.section = section;
  this.marks_of_5_subjects = marks_of_5_subjects;

  // Function to print top three subjects based on marks
  this.printTop3Subjects = function () {
    const subjects = Object.keys(this.marks_of_5_subjects);
    subjects.sort(
      (a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]
    );
    const top3 = subjects.slice(0, 3);
    console.log("Top 3 Subjects:", top3);
  };

  // Function to print the report card
  this.printReportCard = function () {
    console.log("+--------------------+");
    console.log("|     REPORT CARD    |");
    console.log("+--------------------+");
    console.log("| Name     -", this.name );
    console.log("| Roll no. -", this.roll_no);
    console.log("| Class    -", this.class);
    console.log("| Section  -", this.section);

    const subjects = Object.keys(this.marks_of_5_subjects);
    subjects.forEach((subject) => {
      console.log(
        "|",
        subject.charAt(0).toUpperCase() + subject.slice(1),
        "-",
        this.marks_of_5_subjects[subject]
      );
    });

    const totalMarks = Object.values(this.marks_of_5_subjects).reduce(
      (acc, curr) => acc + curr,
      0
    );
    const percentage = (totalMarks / (5 * 100)) * 100;
    console.log("| Percentage -", percentage.toFixed(1), "%");
    console.log("+--------------------+");
  };
}

// Example usage:
const student = new Student("Huzaifa", 16, "X", "A", {
  science: 72,
  maths: 75,
  social_science: 79,
  english: 80,
  hindi: 67,
});

student.printTop3Subjects();
student.printReportCard();
