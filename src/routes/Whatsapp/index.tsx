import {
    useState, useMemo
} from "react"
import styles from "../Instagram/Instagram.module.css"

const templating = (waktu: string, jabatan: string, namaSekolah: string) => `Selamat ${waktu} ${jabatan} ${namaSekolah}.

Perkenalkan saya Ezra dari SMA Negeri 12 Bekasi selaku panitia penyelenggara “Science Class Teknologi Pangan 2023” ingin memberitahukan mengenai acara kami. Kegiatan ini diperuntukkan kepada para anggota dan ketua KIR yang bersedia mengirimkan perwakilannya untuk acara yang akan diselenggarakan pada Sabtu, 20 Mei 2023 bertempat di SMA Negeri 12 Bekasi.

Maksud dan tujuan saya disini yakni untuk memberikan surat undangan resmi kepada KIR ${namaSekolah} untuk dapat mengikuti kegiatan tersebut.

Kami harap KIR ${namaSekolah} berkenan mengirimkan perwakilan untuk mengikuti kegiatan ini. Jika ada yang ingin ditanyakan mengenai pendaftaran, Anda bisa menghubungi saya melalui kontak ini.

Demikian yang dapat saya sampaikan, besar harapan kami agar Anda dapat memberikan tanggapan terkait hal ini dan bersedia mengirimkan perwakilan tim untuk menjadi bagian dari acara ini.

Terima kasih.


Hormat kami,
Panitia Science Class Teknologi Pangan.`

export function Whatsapp() {
    const [waktu, setWaktu] = useState('');
    const [jabatan, setJabatan] = useState('');
    const [sekolah, setSekolah] = useState('');

    const text = useMemo(() => templating(waktu === "" ? "<WAKTU>" : waktu, jabatan === "" ? "<JABATAN>" : jabatan, sekolah === "" ? "<NAMA SEKOLAH>" : sekolah), [jabatan, sekolah, waktu]);

    return (
        <div className={styles.container}>
            <select name="waktu" onChange={(e) => setWaktu(e.target.value)}>
                <option value="">Pilih waktu</option>
                <option value="pagi">Pagi</option>
                <option value="siang">Siang</option>
                <option value="sore">Sore</option>
                <option value="malam">Malam</option>
            </select>

            <select name="jabatan" onChange={(e) => setJabatan(e.target.value)}>
                <option value="">Pilih jabatan</option>
                <option value="ketua KIR">ketua KIR</option>
                <option value="narahubung">narahubung</option>
            </select>

            <input type="text" value={sekolah} onChange={e => setSekolah(e.target.value)} placeholder="Masukan nama sekolah" />

            <textarea readOnly value={text} />

            <button disabled={waktu === "" || sekolah === "" || jabatan === ""} onClick={() => navigator.clipboard.writeText(text)}>Salin</button>
        </div>
    )
}