
import AboutManagers from "../AboutStaff/AboutManagers";
import AboutStaff from "../AboutStaff/AboutStaff"
import AboutWelcom from "../AboutWelcom/AboutWelcom"


function AboutHome() {
  return (
    <div>
      <AboutWelcom />
      <AboutStaff />

      <AboutManagers />
    </div>
  );
}

export default AboutHome