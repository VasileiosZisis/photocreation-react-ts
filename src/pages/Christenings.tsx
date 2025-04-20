import MasonryImageList from '../components/Gallery.jsx'
import MetaTags from '../components/MetaTags.jsx'

const itemData = [
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230268/studiophotocreation/ch_2v/SPC_0966_phsn9n.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230261/studiophotocreation/ch_2v/SPC_0962_ll1zyl.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230268/studiophotocreation/ch_2v/SPC_0954_v2kyfx.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230261/studiophotocreation/ch_2v/SPC_0953_fzxuul.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230254/studiophotocreation/ch_2v/SPC_0952_hrgmhg.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230253/studiophotocreation/ch_2v/SPC_0941_ciktlg.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230246/studiophotocreation/ch_2v/SPC_0938_l7eaa5.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230241/studiophotocreation/ch_2v/SPC_0936_rfabk3.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230236/studiophotocreation/ch_2v/SPC_0921_xjpt2l.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230227/studiophotocreation/ch_2v/SPC_0915_cskowp.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230226/studiophotocreation/ch_2v/SPC_0912_hw5jyb.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230219/studiophotocreation/ch_2v/SPC_0894_g1xfyp.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230219/studiophotocreation/ch_2v/SPC_0881_jayp1e.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230209/studiophotocreation/ch_2v/SPC_0851_azdoin.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230208/studiophotocreation/ch_2v/SPC_0844_iicstn.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230207/studiophotocreation/ch_2v/SPC_0840_vptios.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230200/studiophotocreation/ch_2v/SPC_0839_cxktwa.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230199/studiophotocreation/ch_2v/SPC_0830_j2ckii.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230191/studiophotocreation/ch_2v/SPC_0813_pr67mh.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230180/studiophotocreation/ch_2v/SPC_0802_j12mjo.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230190/studiophotocreation/ch_2v/SPC_0794_f4h9dn.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230176/studiophotocreation/ch_2v/SPC_0773_cn2tpx.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230175/studiophotocreation/ch_2v/SPC_0772_qdas3a.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230167/studiophotocreation/ch_2v/SPC_0766_h0yskl.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230167/studiophotocreation/ch_2v/SPC_0745_h9z2q4.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230159/studiophotocreation/ch_2v/SPC_0722_pcpiqp.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230159/studiophotocreation/ch_2v/SPC_0699_tctuov.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230152/studiophotocreation/ch_2v/SPC_0696_klop88.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230151/studiophotocreation/ch_2v/SPC_0695_cuc9bp.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230145/studiophotocreation/ch_2v/SPC_0690_ubdo6o.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230139/studiophotocreation/ch_2v/SPC_0689_lq3gkg.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230139/studiophotocreation/ch_2v/SPC_0669_ljiwdb.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230129/studiophotocreation/ch_2v/SPC_0658_mgesab.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230128/studiophotocreation/ch_2v/SPC_0652_uxehqa.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230128/studiophotocreation/ch_2v/SPC_0633_gnwk8t.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230117/studiophotocreation/ch_2v/SPC_0626_khjryj.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230118/studiophotocreation/ch_2v/SPC_0624_hdohbu.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230116/studiophotocreation/ch_2v/SPC_0622_agp85r.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230109/studiophotocreation/ch_2v/SPC_0599_x14z7s.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230108/studiophotocreation/ch_2v/SPC_0598_npjxli.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230101/studiophotocreation/ch_2v/SPC_0586_ym4ren.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230101/studiophotocreation/ch_2v/SPC_0585_njfz0g.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230090/studiophotocreation/ch_2v/SPC_0584_idtolj.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230090/studiophotocreation/ch_2v/SPC_0574_ayt3eg.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230089/studiophotocreation/ch_2v/SPC_0573_imlms9.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702230002/studiophotocreation/ch_2v/SPC_0565_lyb4ht.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229989/studiophotocreation/ch_2v/SPC_0550_m1gwo2.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229980/studiophotocreation/ch_2v/SPC_0532_stbxnh.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229989/studiophotocreation/ch_2v/SPC_0524_j0x2yx.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229980/studiophotocreation/ch_2v/SPC_0517_gxi1cz.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229972/studiophotocreation/ch_2v/SPC_0505_zni1gc.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229971/studiophotocreation/ch_2v/SPC_0499_etn4v3.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229963/studiophotocreation/ch_2v/SPC_0493_tnslq4.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229963/studiophotocreation/ch_2v/SPC_0482_tejvkt.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229959/studiophotocreation/ch_2v/SPC_0478_dev32r.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229949/studiophotocreation/ch_2v/SPC_0477_iqihiv.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229949/studiophotocreation/ch_2v/SPC_0476_p35t0a.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229950/studiophotocreation/ch_2v/SPC_0468_iwixsp.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229937/studiophotocreation/ch_2v/SPC_0464_g4sxht.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229937/studiophotocreation/ch_2v/SPC_0456_qao21l.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229936/studiophotocreation/ch_2v/SPC_0451_ai3drx.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229926/studiophotocreation/ch_2v/SPC_0440_gxtwip.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229924/studiophotocreation/ch_2v/SPC_0433_jdb2v3.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229924/studiophotocreation/ch_2v/SPC_0430_alvnqd.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229916/studiophotocreation/ch_2v/SPC_0426_yvfd2k.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229916/studiophotocreation/ch_2v/SPC_0422_cg9jsx.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229908/studiophotocreation/ch_2v/SPC_0420_d8spno.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229908/studiophotocreation/ch_2v/SPC_0419_c9r2lq.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229897/studiophotocreation/ch_2v/SPC_0417_gdsiqx.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229896/studiophotocreation/ch_2v/SPC_0401_eklcsu.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229895/studiophotocreation/ch_2v/SPC_0400_zqrayy.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229887/studiophotocreation/ch_2v/SPC_0396_mvaxdl.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229885/studiophotocreation/ch_2v/SPC_0395_gav8g5.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229879/studiophotocreation/ch_2v/SPC_0389_apx4w6.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229874/studiophotocreation/ch_2v/SPC_0387_cjgf2y.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229865/studiophotocreation/ch_2v/SPC_0383_vabfkl.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229856/studiophotocreation/ch_2v/SPC_0382_sqbrto.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229864/studiophotocreation/ch_2v/SPC_0382-2_thv0c0.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229856/studiophotocreation/ch_2v/SPC_0381_fqk5bv.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229847/studiophotocreation/ch_2v/SPC_0380_knjrqh.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229844/studiophotocreation/ch_2v/SPC_0378_qsbnrh.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229835/studiophotocreation/ch_2v/SPC_0374_jtuihz.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229834/studiophotocreation/ch_2v/SPC_0372_d3wwft.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229827/studiophotocreation/ch_2v/SPC_0370_s3qwuj.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229822/studiophotocreation/ch_2v/SPC_0366_uyjznn.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229823/studiophotocreation/ch_2v/SPC_0366-2_ug4skl.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229815/studiophotocreation/ch_2v/SPC_0356_l3jvts.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229815/studiophotocreation/ch_2v/SPC_0355_ptpful.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229809/studiophotocreation/ch_2v/SPC_0342_nwye7c.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229809/studiophotocreation/ch_2v/SPC_0339_e0bxdw.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229801/studiophotocreation/ch_2v/SPC_0334_jxnzwy.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229800/studiophotocreation/ch_2v/SPC_0333_ejhlge.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229802/studiophotocreation/ch_2v/SPC_0333-2_pcysg1.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229795/studiophotocreation/ch_2v/SPC_0277_c3h9jz.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229793/studiophotocreation/ch_2v/SPC_0261_ygq1ox.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229792/studiophotocreation/ch_2v/SPC_0253_sr5ctz.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229788/studiophotocreation/ch_2v/SPC_0219_t9ygkf.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229781/studiophotocreation/ch_2v/SPC_0137_u6wk2y.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229781/studiophotocreation/ch_2v/SPC_0087_sie4vh.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702229781/studiophotocreation/ch_2v/SPC_0042_ivo4np.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228833/studiophotocreation/ch_2v/SPC_0037_iwjyce.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228832/studiophotocreation/ch_2v/SPC_0036_oaq2vm.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228832/studiophotocreation/ch_2v/SPC_0035_lkkcrc.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228832/studiophotocreation/ch_2v/SPC_0034_mwm3be.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228831/studiophotocreation/ch_2v/SPC_0029_resfvj.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228826/studiophotocreation/ch_2v/SPC_0028_h0rdub.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228825/studiophotocreation/ch_2v/SPC_0027_alfdzf.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228825/studiophotocreation/ch_2v/SPC_0025_jjywrg.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228821/studiophotocreation/ch_2v/SPC_0024_hnphrj.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228820/studiophotocreation/ch_2v/SPC_0022_c9hrva.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228820/studiophotocreation/ch_2v/SPC_0022-2_a0xikp.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228820/studiophotocreation/ch_2v/SPC_0020_thmep1.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228816/studiophotocreation/ch_2v/SPC_0018_w4ueca.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228814/studiophotocreation/ch_2v/SPC_0017_w0niw2.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228815/studiophotocreation/ch_2v/SPC_0017-2_fvcsp4.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228812/studiophotocreation/ch_2v/SPC_0015_bjafuv.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228814/studiophotocreation/ch_2v/SPC_0014_ayos7e.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228811/studiophotocreation/ch_2v/SPC_0011_mckaoy.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228811/studiophotocreation/ch_2v/SPC_0009_zhv5cx.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228811/studiophotocreation/ch_2v/SPC_0009-2_jyllpg.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228811/studiophotocreation/ch_2v/SPC_0006_e12qka.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702228810/studiophotocreation/ch_2v/SPC_0003_t4st8n.webp',
    alt: 'Photo from a christening in Paphos by StudioPhotoCreation',
    title: 'Christening'
  }
]

function Christenings () {
  return (
    <>
      <MetaTags
        metatitle={'Christening photos - Studio Photo Creation by D'}
        metadescription={
          'Christening photos, from wedding photographer Dimitris Domouchtsis'
        }
        metaurl={'https://www.studiophotocreationbyd.com/christenings'}
      />
      <MasonryImageList itemData={itemData} />
    </>
  )
}
export default Christenings
