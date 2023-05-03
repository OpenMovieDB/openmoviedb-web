import { Film } from "@/screens/Film/Film";
import { useRouter } from "next/router";

const FilmPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <Film />;
};

export default FilmPage;
