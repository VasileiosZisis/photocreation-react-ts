import MasonryImageList from '../components/Gallery.jsx'
import MetaTags from '../components/MetaTags.jsx'

const itemData = [
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568085/studiophotocreation/proposals/Chirag-Priyanka/SPC_0211_i8jygs.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568085/studiophotocreation/proposals/Chirag-Priyanka/SPC_0209_ph5cwv.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568086/studiophotocreation/proposals/Chirag-Priyanka/SPC_0206_bi3mjd.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568084/studiophotocreation/proposals/Chirag-Priyanka/SPC_0182_a3jv8i.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568085/studiophotocreation/proposals/Chirag-Priyanka/SPC_0180_hvrp3g.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568085/studiophotocreation/proposals/Chirag-Priyanka/SPC_0171_bmnthu.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568084/studiophotocreation/proposals/Chirag-Priyanka/SPC_0162_kxbzuz.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568086/studiophotocreation/proposals/Chirag-Priyanka/SPC_0162_2_fw5sz2.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568083/studiophotocreation/proposals/Chirag-Priyanka/SPC_0155_udtmyx.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568082/studiophotocreation/proposals/Chirag-Priyanka/SPC_0152_qa6avu.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568081/studiophotocreation/proposals/Chirag-Priyanka/SPC_0151_hnypdu.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568080/studiophotocreation/proposals/Chirag-Priyanka/SPC_0149_ol6t4q.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568082/studiophotocreation/proposals/Chirag-Priyanka/SPC_0148_w1eve2.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568082/studiophotocreation/proposals/Chirag-Priyanka/SPC_0138_k5c0oq.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568081/studiophotocreation/proposals/Chirag-Priyanka/SPC_0132_vqq6k1.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568077/studiophotocreation/proposals/Chirag-Priyanka/SPC_0130_fvtcue.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568080/studiophotocreation/proposals/Chirag-Priyanka/SPC_0129_unfes6.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568079/studiophotocreation/proposals/Chirag-Priyanka/SPC_0126_oxohsb.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568076/studiophotocreation/proposals/Chirag-Priyanka/SPC_0125_dvijps.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568076/studiophotocreation/proposals/Chirag-Priyanka/SPC_0123_tafdva.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568078/studiophotocreation/proposals/Chirag-Priyanka/SPC_0122_knat9a.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568074/studiophotocreation/proposals/Chirag-Priyanka/SPC_0119_jef4dc.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568076/studiophotocreation/proposals/Chirag-Priyanka/SPC_0115_t4xv1h.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568073/studiophotocreation/proposals/Chirag-Priyanka/SPC_0114_vfdtq9.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568073/studiophotocreation/proposals/Chirag-Priyanka/SPC_0114_2_fis01f.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568073/studiophotocreation/proposals/Chirag-Priyanka/SPC_0112_ix7zyv.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568073/studiophotocreation/proposals/Chirag-Priyanka/SPC_0111_ubaazr.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568072/studiophotocreation/proposals/Chirag-Priyanka/SPC_0109_le3vwx.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568071/studiophotocreation/proposals/Chirag-Priyanka/SPC_0107_wolcrn.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568072/studiophotocreation/proposals/Chirag-Priyanka/SPC_0105_tlenb6.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568071/studiophotocreation/proposals/Chirag-Priyanka/SPC_0104_raf0l3.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568069/studiophotocreation/proposals/Chirag-Priyanka/SPC_0101_ffamra.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568071/studiophotocreation/proposals/Chirag-Priyanka/SPC_0098_lzjmgr.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568070/studiophotocreation/proposals/Chirag-Priyanka/SPC_0095_zacue3.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568070/studiophotocreation/proposals/Chirag-Priyanka/SPC_0092_jizupd.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568083/studiophotocreation/proposals/Chirag-Priyanka/SPC_0092_2_nun1qq.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568067/studiophotocreation/proposals/Chirag-Priyanka/SPC_0091_fsaarh.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568069/studiophotocreation/proposals/Chirag-Priyanka/SPC_0090_qskydb.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568067/studiophotocreation/proposals/Chirag-Priyanka/SPC_0088_vlklzc.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568067/studiophotocreation/proposals/Chirag-Priyanka/SPC_0088_2_ct6o0y.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568065/studiophotocreation/proposals/Chirag-Priyanka/SPC_0085_mujr8v.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568065/studiophotocreation/proposals/Chirag-Priyanka/SPC_0084_xdnow9.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568063/studiophotocreation/proposals/Chirag-Priyanka/SPC_0083_p5kwwc.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568068/studiophotocreation/proposals/Chirag-Priyanka/SPC_0082_u5ytk5.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568065/studiophotocreation/proposals/Chirag-Priyanka/SPC_0078_ymid4x.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568067/studiophotocreation/proposals/Chirag-Priyanka/SPC_0072_kodljq.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568064/studiophotocreation/proposals/Chirag-Priyanka/SPC_0071_we5aft.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568063/studiophotocreation/proposals/Chirag-Priyanka/SPC_0066_ufmcdg.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568061/studiophotocreation/proposals/Chirag-Priyanka/SPC_0063_mbpn4s.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568061/studiophotocreation/proposals/Chirag-Priyanka/SPC_0062_yerbyw.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568060/studiophotocreation/proposals/Chirag-Priyanka/SPC_0058_mjqimg.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568059/studiophotocreation/proposals/Chirag-Priyanka/SPC_0056_uqcflw.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568059/studiophotocreation/proposals/Chirag-Priyanka/SPC_0053_nvxsf3.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568060/studiophotocreation/proposals/Chirag-Priyanka/SPC_0052_iuyool.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568059/studiophotocreation/proposals/Chirag-Priyanka/SPC_0050_xv3vug.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568058/studiophotocreation/proposals/Chirag-Priyanka/SPC_0048_tawdtw.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568058/studiophotocreation/proposals/Chirag-Priyanka/SPC_0046_u2pl36.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568057/studiophotocreation/proposals/Chirag-Priyanka/SPC_0045_tauisl.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568058/studiophotocreation/proposals/Chirag-Priyanka/SPC_0044_mynxu7.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568056/studiophotocreation/proposals/Chirag-Priyanka/SPC_0043_yhkwnw.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568055/studiophotocreation/proposals/Chirag-Priyanka/SPC_0038_giohqu.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568055/studiophotocreation/proposals/Chirag-Priyanka/SPC_0036_axtkyc.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568054/studiophotocreation/proposals/Chirag-Priyanka/SPC_0036_2_yjyrli.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568056/studiophotocreation/proposals/Chirag-Priyanka/SPC_0034_zm0hrx.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568059/studiophotocreation/proposals/Chirag-Priyanka/SPC_0032_xe9kn9.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568051/studiophotocreation/proposals/Chirag-Priyanka/SPC_0032_2_fih6uz.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568052/studiophotocreation/proposals/Chirag-Priyanka/SPC_0030_iueaqh.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568051/studiophotocreation/proposals/Chirag-Priyanka/SPC_0026_a3dmy3.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568051/studiophotocreation/proposals/Chirag-Priyanka/SPC_0025_fjhzzd.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568049/studiophotocreation/proposals/Chirag-Priyanka/SPC_0022_iacimi.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568048/studiophotocreation/proposals/Chirag-Priyanka/SPC_0015_xz1vgh.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568050/studiophotocreation/proposals/Chirag-Priyanka/SPC_0013_gn0jpx.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568052/studiophotocreation/proposals/Chirag-Priyanka/SPC_0010_iixsx4.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568052/studiophotocreation/proposals/Chirag-Priyanka/SPC_0005_xhuqle.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636568050/studiophotocreation/proposals/Chirag-Priyanka/SPC_0003_thtk6y.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567855/studiophotocreation/proposals/Antreas-Athina/SPC_0218_fpz7pv.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567855/studiophotocreation/proposals/Antreas-Athina/SPC_0206_xts7c9.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567855/studiophotocreation/proposals/Antreas-Athina/SPC_0199_wqybxl.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567853/studiophotocreation/proposals/Antreas-Athina/SPC_0195_goq5b9.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567856/studiophotocreation/proposals/Antreas-Athina/SPC_0192_xlex1m.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567854/studiophotocreation/proposals/Antreas-Athina/SPC_0179_hidv33.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567856/studiophotocreation/proposals/Antreas-Athina/SPC_0171_ywpba8.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567852/studiophotocreation/proposals/Antreas-Athina/SPC_0170_zbbe3s.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567852/studiophotocreation/proposals/Antreas-Athina/SPC_0153_dwquub.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567854/studiophotocreation/proposals/Antreas-Athina/SPC_0150_rzkvc8.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567852/studiophotocreation/proposals/Antreas-Athina/SPC_0145_mlc9wm.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567852/studiophotocreation/proposals/Antreas-Athina/SPC_0142_zzcd3e.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567851/studiophotocreation/proposals/Antreas-Athina/SPC_0140_lfk4ab.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567850/studiophotocreation/proposals/Antreas-Athina/SPC_0105_tuquik.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567850/studiophotocreation/proposals/Antreas-Athina/SPC_0103_jjcv2p.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567849/studiophotocreation/proposals/Antreas-Athina/SPC_0099_knf7mc.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567851/studiophotocreation/proposals/Antreas-Athina/SPC_0096_ojwwir.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567848/studiophotocreation/proposals/Antreas-Athina/SPC_0090_fpf3uv.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567849/studiophotocreation/proposals/Antreas-Athina/SPC_0089_w6g7jo.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567848/studiophotocreation/proposals/Antreas-Athina/SPC_0084_df2zky.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567850/studiophotocreation/proposals/Antreas-Athina/SPC_0082_o9nhhm.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567847/studiophotocreation/proposals/Antreas-Athina/SPC_0079_smxc3k.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567846/studiophotocreation/proposals/Antreas-Athina/SPC_0077_nhuph9.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567846/studiophotocreation/proposals/Antreas-Athina/SPC_0075_zucips.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567847/studiophotocreation/proposals/Antreas-Athina/SPC_0073_c2rxyz.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567845/studiophotocreation/proposals/Antreas-Athina/SPC_0069_avkuwb.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567846/studiophotocreation/proposals/Antreas-Athina/SPC_0061_b17lep.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567843/studiophotocreation/proposals/Antreas-Athina/SPC_0058_nli4es.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567846/studiophotocreation/proposals/Antreas-Athina/SPC_0053_hptrk7.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567843/studiophotocreation/proposals/Antreas-Athina/SPC_0050_xibiwe.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567843/studiophotocreation/proposals/Antreas-Athina/SPC_0048_txdqgu.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567843/studiophotocreation/proposals/Antreas-Athina/SPC_0044_lm99t7.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567842/studiophotocreation/proposals/Antreas-Athina/SPC_0040_jdttwd.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567845/studiophotocreation/proposals/Antreas-Athina/SPC_0038_t0br1v.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567841/studiophotocreation/proposals/Antreas-Athina/SPC_0037_fmtrab.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567860/studiophotocreation/proposals/Antreas-Athina/SPC_0035_rs3x87.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567860/studiophotocreation/proposals/Antreas-Athina/SPC_0033_pvx5pe.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567859/studiophotocreation/proposals/Antreas-Athina/SPC_0031_yn6dmn.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567860/studiophotocreation/proposals/Antreas-Athina/SPC_0028_bvfik7.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567861/studiophotocreation/proposals/Antreas-Athina/SPC_0023_otrcjn.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567858/studiophotocreation/proposals/Antreas-Athina/SPC_0021_e2plot.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567857/studiophotocreation/proposals/Antreas-Athina/SPC_0019_qlp1oo.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1636567859/studiophotocreation/proposals/Antreas-Athina/SPC_0016_eblm4e.webp',
    alt: 'Photo from a proposal',
    title: 'Proposal Photoshoot'
  }
]

function Proposals () {
  return (
    <>
      <MetaTags
        metatitle={'Proposal photos - Studio Photo Creation by D'}
        metadescription={
          'Proposal photos from wedding photographer Dimitris Domouchtsis'
        }
        metaurl={'https://www.studiophotocreationbyd.com/proposals'}
      />
      <MasonryImageList itemData={itemData} />
    </>
  )
}
export default Proposals
