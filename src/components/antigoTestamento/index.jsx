import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import moses from "../../assets/moses.jpg";
import styles from "./antigotestamento.module.scss";

const AntigoTestamento = () => {
  return (
    <div className={styles.container}>
      <h1>O Antigo Testamento:</h1>
      <div>
        <Link href="/antigo-testamento">
          <Image
            src={moses}
            alt="img antigo testamento"
          />
          <FaPlay size={50} />
        </Link>
      </div>
    </div>
  );
};
export default AntigoTestamento;
