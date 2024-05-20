import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import jesus from "../../assets/jesus.jpg";
import styles from "./novotestamento.module.scss";

const NovoTestamento = () => {
  return (
    <div className={styles.container}>
      <h1>O Novo Testamento:</h1>
      <div>
        <Link href="/antigo-testamento">
          <Image
            src={jesus}
            alt="img novo testamento"
            width={150}
            height={100}
          />
          <FaPlay size={50} />
        </Link>
      </div>
    </div>
  );
};
export default NovoTestamento;
