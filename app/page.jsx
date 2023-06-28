import Card from "./pages/card/cards";
import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Card></Card>
    </div>
  );
}
