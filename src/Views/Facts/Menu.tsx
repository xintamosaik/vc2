import Personal from "./Personal.tsx"
export default function Menu({ path }: { path: string }) {
  switch (path) {
    case "personal": {
      return (<Personal />);
    }
    case "summary": {
      return (
        <>
          <h3>Summary</h3>
        </>
      );
    }
    case "jobs": {
      return (
        <>
          <h3>Jobs</h3>
        </>
      );
    }
    case "education": {
      return (
        <>
          <h3>Education</h3>
        </>
      );
    }
    case "skills": {
      return (
        <>
          <h3>Skills</h3>
        </>
      );
    }
  }
}
