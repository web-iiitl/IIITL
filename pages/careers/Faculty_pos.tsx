import Link from "next/link";
import Layout from "../../components/Layout/index";

const FacultyPos = () => {
  return (
    <Layout>
      <div className="container mx-auto mt-10 p-5">
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-5 text-center">Faculty Positions</h2>
        <ul className="list-disc ml-3 sm:ml-6 space-y-2">
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-lg text-green-600 hover:text-green-700 block">
                Advertisement for Walk-In-Interview for the Adhoc Faculty CS/IT
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-lg text-green-600 hover:text-green-700 block">
                Notice Interview dates for CS&IT on August 2-3, 2023.
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-lg text-green-600 hover:text-green-700 block">
                Details of Interview schedule
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-lg text-green-600 hover:text-green-700 block">
                Details of Redressal Grievance
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-lg text-green-600 hover:text-green-700 block">
                Details of Shortlisting of Applications for the Faculty positions (Mathematics – Interview Date- 18.07.2023, Management & Humanities- Interview Date- 21.07.2023 & CS/IT Deptt- Interview Date(s)- 22.07.2023 & 23.07.2023)
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-lg text-green-600 hover:text-green-700 block">
                Walk In Interview for Temporary Faculty in Department of Mathematics
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-lg text-green-600 hover:text-green-700 block">
                Closure of Rolling Advertisement No. IIITL/Recruitment/2021/RA-02 dt. 24.11.2021 with effect from 11.59 pm of 10.01.2023.
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-lg text-green-600 hover:text-green-700 block">
                List of Shortlisted & Not Shortlisted candidates for Faculty Positions in CS/IT Department
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-lg text-green-600 hover:text-green-700 block">
                List of Shortlisted Candidates for Teaching Positions in Department of Mathematics
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-lg text-green-600 hover:text-green-700 block">
                Notice Advertisement for the Faculty
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-lg text-green-600 hover:text-green-700 block">
                Apply Now
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default FacultyPos;
