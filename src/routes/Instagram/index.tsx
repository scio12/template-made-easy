import {
    useState, useMemo
} from "react"
import styles from "./Instagram.module.css"

const templating = (waktu: string, namaSekolah: string) => `Selamat ${waktu} KIR ${namaSekolah}.

Kami dari KIR SMA Negeri 12 Bekasi ingin memberitahukan mengenai acara kami yang didukung oleh Forum of Scientist Teenagers (FOSCA), yaitu Science Class Teknologi Pangan 2023. Kami ingin mengundang KIR SMA ${namaSekolah} untuk dapat mengikuti acara ini. Oleh karena itu, apakah KIR ${namaSekolah} berkenan untuk memberikan kontak narahubung atau ketua KIR ${namaSekolah} agar kami dapat memberikan surat undangan resmi kegiatan ini?

Terima kasih.`

export function Instagram() {
    const [waktu, setWaktu] = useState('');
    const [sekolah, setSekolah] = useState('');

    const text = useMemo(() => templating(waktu === "" ? "<WAKTU>" : waktu, sekolah === "" ? "<NAMA SEKOLAH>" : sekolah), [sekolah, waktu]);

    return (
        <div className={styles.container}>
            <select name="waktu" onChange={(e) => setWaktu(e.target.value)}>
                <option value="">Pilih waktu</option>
                <option value="pagi">Pagi</option>
                <option value="siang">Siang</option>
                <option value="sore">Sore</option>
                <option value="malam">Malam</option>
            </select>

            <input type="text" value={sekolah} onChange={e => setSekolah(e.target.value)} placeholder="Masukan nama sekolah" />

            <textarea readOnly value={text} />

            <button disabled={waktu === "" || sekolah === ""} onClick={() => navigator.clipboard.writeText(text)}>Salin</button>
        </div>
    )
}