import MasonryImageList from '../components/Gallery.jsx'
import MetaTags from '../components/MetaTags.jsx'

const itemData = [
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227527/studiophotocreation/en-we_2v/SPC_1158_amvpto.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227519/studiophotocreation/en-we_2v/SPC_1078_mlb3hx.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227519/studiophotocreation/en-we_2v/SPC_1001_st7zkh.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227519/studiophotocreation/en-we_2v/SPC_0989_fvcuva.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227519/studiophotocreation/en-we_2v/SPC_0914_uawd64.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227511/studiophotocreation/en-we_2v/SPC_0911_tx0hs3.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227510/studiophotocreation/en-we_2v/SPC_0869_rncywu.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227510/studiophotocreation/en-we_2v/SPC_0863_s31e0p.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227509/studiophotocreation/en-we_2v/SPC_0860_pia1hu.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227503/studiophotocreation/en-we_2v/SPC_0840_mzhvdf.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227502/studiophotocreation/en-we_2v/SPC_0835_qk2h6h.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227501/studiophotocreation/en-we_2v/SPC_0827_enzhlv.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227496/studiophotocreation/en-we_2v/SPC_0783_n6ka48.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227496/studiophotocreation/en-we_2v/SPC_0779_fttetq.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227496/studiophotocreation/en-we_2v/SPC_0763_b3pzfq.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227488/studiophotocreation/en-we_2v/SPC_0725_afvr4j.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227487/studiophotocreation/en-we_2v/SPC_0717_bahyvg.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227487/studiophotocreation/en-we_2v/SPC_0706_elzg54.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227487/studiophotocreation/en-we_2v/SPC_0683_bv1d7w.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227469/studiophotocreation/en-we_2v/SPC_0672_irfiji.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227468/studiophotocreation/en-we_2v/SPC_0653_vwckaf.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227469/studiophotocreation/en-we_2v/SPC_0648_zktaon.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227468/studiophotocreation/en-we_2v/SPC_0625_bxwcqg.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227460/studiophotocreation/en-we_2v/SPC_0622_ixtnlg.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227459/studiophotocreation/en-we_2v/SPC_0621_jdvuvl.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227459/studiophotocreation/en-we_2v/SPC_0619_lghkwc.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227459/studiophotocreation/en-we_2v/SPC_0618_ob4s6h.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227453/studiophotocreation/en-we_2v/SPC_0581_ozyhpl.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227452/studiophotocreation/en-we_2v/SPC_0569_of8cmz.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227452/studiophotocreation/en-we_2v/SPC_0552_ldxkdb.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227446/studiophotocreation/en-we_2v/SPC_0542_lwsbac.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227445/studiophotocreation/en-we_2v/SPC_0535_tbkoao.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227444/studiophotocreation/en-we_2v/SPC_0533_cmten4.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227439/studiophotocreation/en-we_2v/SPC_0519_wtxg9a.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227438/studiophotocreation/en-we_2v/SPC_0513_jvwrgq.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227438/studiophotocreation/en-we_2v/SPC_0502_p8ennp.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227433/studiophotocreation/en-we_2v/SPC_0495_powcyg.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227430/studiophotocreation/en-we_2v/SPC_0490_vluw7b.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227429/studiophotocreation/en-we_2v/SPC_0482_dwq2qz.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227429/studiophotocreation/en-we_2v/SPC_0482_2_kl3ddz.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227423/studiophotocreation/en-we_2v/SPC_0476_lu8zdl.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227423/studiophotocreation/en-we_2v/SPC_0470_ruzr4d.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227422/studiophotocreation/en-we_2v/SPC_0466_sgtykx.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227417/studiophotocreation/en-we_2v/SPC_0455_lkusqz.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227415/studiophotocreation/en-we_2v/SPC_0454_m408fh.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227415/studiophotocreation/en-we_2v/SPC_0454_2_js02ti.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227411/studiophotocreation/en-we_2v/SPC_0444_yb3r0f.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227410/studiophotocreation/en-we_2v/SPC_0438_rs3at8.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227404/studiophotocreation/en-we_2v/SPC_0436_jqw6sp.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227404/studiophotocreation/en-we_2v/SPC_0435_u0utwb.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227403/studiophotocreation/en-we_2v/SPC_0432_gxvksw.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227403/studiophotocreation/en-we_2v/SPC_0432_2_va1jrs.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227397/studiophotocreation/en-we_2v/SPC_0431_qj1mzf.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227396/studiophotocreation/en-we_2v/SPC_0427_xegee6.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227395/studiophotocreation/en-we_2v/SPC_0421_vglrwr.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227395/studiophotocreation/en-we_2v/SPC_0416_nc19hz.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227389/studiophotocreation/en-we_2v/SPC_0414_dgmyxp.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227388/studiophotocreation/en-we_2v/SPC_0404_oskjad.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227388/studiophotocreation/en-we_2v/SPC_0402_rkhexb.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227388/studiophotocreation/en-we_2v/SPC_0397_zypisj.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227381/studiophotocreation/en-we_2v/SPC_0394_qmkwjf.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227381/studiophotocreation/en-we_2v/SPC_0388_ub1wsl.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227380/studiophotocreation/en-we_2v/SPC_0379_iqyzpi.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227381/studiophotocreation/en-we_2v/SPC_0377_gry9c5.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227375/studiophotocreation/en-we_2v/SPC_0375_a7juqq.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227375/studiophotocreation/en-we_2v/SPC_0374_jvt3bn.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227374/studiophotocreation/en-we_2v/SPC_0373_urggqy.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227367/studiophotocreation/en-we_2v/SPC_0373_2_umnnxx.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227366/studiophotocreation/en-we_2v/SPC_0372_vfz7ly.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227366/studiophotocreation/en-we_2v/SPC_0369_lgkjia.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227366/studiophotocreation/en-we_2v/SPC_0355_h2mpeu.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227366/studiophotocreation/en-we_2v/SPC_0349_aw9z1e.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227359/studiophotocreation/en-we_2v/SPC_0341_bfee5c.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227358/studiophotocreation/en-we_2v/SPC_0337_dbnamv.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227357/studiophotocreation/en-we_2v/SPC_0336_qxbx28.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227357/studiophotocreation/en-we_2v/SPC_0335_hrqyef.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227351/studiophotocreation/en-we_2v/SPC_0335_2_mwuj8y.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227351/studiophotocreation/en-we_2v/SPC_0323_s866c4.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227351/studiophotocreation/en-we_2v/SPC_0311_dhkcpu.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227351/studiophotocreation/en-we_2v/SPC_0310_vhrppf.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227344/studiophotocreation/en-we_2v/SPC_0307_hl5fef.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227343/studiophotocreation/en-we_2v/SPC_0305_vt59jp.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227344/studiophotocreation/en-we_2v/SPC_0293_lncgjp.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227343/studiophotocreation/en-we_2v/SPC_0288_iair2m.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227337/studiophotocreation/en-we_2v/SPC_0279_vfpicb.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227337/studiophotocreation/en-we_2v/SPC_0276_sixlto.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227336/studiophotocreation/en-we_2v/SPC_0268_u0bkik.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227336/studiophotocreation/en-we_2v/SPC_0266_g6gfnr.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227280/studiophotocreation/en-we_2v/SPC_0251_szqck3.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227240/studiophotocreation/en-we_2v/SPC_0249_phxm4m.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227235/studiophotocreation/en-we_2v/SPC_0247_a5btin.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227235/studiophotocreation/en-we_2v/SPC_0235_z9rgpk.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227234/studiophotocreation/en-we_2v/SPC_0234_ahmv40.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227230/studiophotocreation/en-we_2v/SPC_0232_xpkzma.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227228/studiophotocreation/en-we_2v/SPC_0230_uuf2zr.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227227/studiophotocreation/en-we_2v/SPC_0221_mzmer3.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227227/studiophotocreation/en-we_2v/SPC_0219_gnoztt.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227223/studiophotocreation/en-we_2v/SPC_0217_oivrwd.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227222/studiophotocreation/en-we_2v/SPC_0211_tkmuf2.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227221/studiophotocreation/en-we_2v/SPC_0206_hfp8h2.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227218/studiophotocreation/en-we_2v/SPC_0202_munmvl.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227217/studiophotocreation/en-we_2v/SPC_0198_l8sjuq.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227213/studiophotocreation/en-we_2v/SPC_0192_a83jpt.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227213/studiophotocreation/en-we_2v/SPC_0191_m8ycat.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227212/studiophotocreation/en-we_2v/SPC_0189_fup5tn.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227209/studiophotocreation/en-we_2v/SPC_0187_eegntt.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227208/studiophotocreation/en-we_2v/SPC_0184_uiwrls.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227206/studiophotocreation/en-we_2v/SPC_0183_hugn9r.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227205/studiophotocreation/en-we_2v/SPC_0183_3_tgkphj.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227202/studiophotocreation/en-we_2v/SPC_0183_2_rgz9ja.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227200/studiophotocreation/en-we_2v/SPC_0172_solcgq.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227200/studiophotocreation/en-we_2v/SPC_0168_n1ixma.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227196/studiophotocreation/en-we_2v/SPC_0167_mu1vav.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227196/studiophotocreation/en-we_2v/SPC_0159_dldlyg.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227195/studiophotocreation/en-we_2v/SPC_0159_2_ega8wz.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227191/studiophotocreation/en-we_2v/SPC_0154_uqigln.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227191/studiophotocreation/en-we_2v/SPC_0152_tuh0lg.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227190/studiophotocreation/en-we_2v/SPC_0150_onpp8g.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227186/studiophotocreation/en-we_2v/SPC_0147_hcsrp0.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227185/studiophotocreation/en-we_2v/SPC_0146_jjcjhw.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227185/studiophotocreation/en-we_2v/SPC_0146_2_q4wip1.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227185/studiophotocreation/en-we_2v/SPC_0136_eklfyu.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227180/studiophotocreation/en-we_2v/SPC_0136_2_wyzcii.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227180/studiophotocreation/en-we_2v/SPC_0132_cvhr4x.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227179/studiophotocreation/en-we_2v/SPC_0123_kmkvti.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227179/studiophotocreation/en-we_2v/SPC_0121_gnwhgg.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227175/studiophotocreation/en-we_2v/SPC_0119_nxf92y.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227174/studiophotocreation/en-we_2v/SPC_0117_vciiho.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227174/studiophotocreation/en-we_2v/SPC_0115_llfgiw.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227175/studiophotocreation/en-we_2v/SPC_0113_voep8q.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227170/studiophotocreation/en-we_2v/SPC_0112_hxkbc8.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227170/studiophotocreation/en-we_2v/SPC_0111_ocvhxb.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227169/studiophotocreation/en-we_2v/SPC_0111_2_kw2ko1.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227165/studiophotocreation/en-we_2v/SPC_0106_tnl8gi.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227165/studiophotocreation/en-we_2v/SPC_0100_s41brp.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227165/studiophotocreation/en-we_2v/SPC_0097_p09wx4.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227160/studiophotocreation/en-we_2v/SPC_0097_2_krfvdh.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227159/studiophotocreation/en-we_2v/SPC_0096_ywlelz.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227161/studiophotocreation/en-we_2v/SPC_0094_ezbafy.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227159/studiophotocreation/en-we_2v/SPC_0092_qfknvr.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227154/studiophotocreation/en-we_2v/SPC_0090_ole8ws.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227154/studiophotocreation/en-we_2v/SPC_0089_dmaqyl.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227154/studiophotocreation/en-we_2v/SPC_0087_vbyr58.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227155/studiophotocreation/en-we_2v/SPC_0085_a5yanv.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227151/studiophotocreation/en-we_2v/SPC_0083_j6tj5a.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227149/studiophotocreation/en-we_2v/SPC_0080_gub2n6.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227148/studiophotocreation/en-we_2v/SPC_0080_2_dcne2e.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227145/studiophotocreation/en-we_2v/SPC_0077_ivipnb.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227144/studiophotocreation/en-we_2v/SPC_0075_ia3bub.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227141/studiophotocreation/en-we_2v/SPC_0075_2_rf8rra.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227139/studiophotocreation/en-we_2v/SPC_0071_erqqbb.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227139/studiophotocreation/en-we_2v/SPC_0067_umhoiv.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227138/studiophotocreation/en-we_2v/SPC_0065_vqjeys.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227134/studiophotocreation/en-we_2v/SPC_0063_mpfifo.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227134/studiophotocreation/en-we_2v/SPC_0061_ekccyp.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227134/studiophotocreation/en-we_2v/SPC_0061_2_ti3xuo.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227133/studiophotocreation/en-we_2v/SPC_0060_hjh4dk.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227130/studiophotocreation/en-we_2v/SPC_0058_vw4itf.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227128/studiophotocreation/en-we_2v/SPC_0057_wgp6de.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227129/studiophotocreation/en-we_2v/SPC_0054_p7iaed.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227125/studiophotocreation/en-we_2v/SPC_0051_lyfucw.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227125/studiophotocreation/en-we_2v/SPC_0047_nra7wx.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227123/studiophotocreation/en-we_2v/SPC_0045_hiqp7q.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227121/studiophotocreation/en-we_2v/SPC_0045_2_jcuxn9.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227120/studiophotocreation/en-we_2v/SPC_0040_jkf4um.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227119/studiophotocreation/en-we_2v/SPC_0037_yf0olo.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227115/studiophotocreation/en-we_2v/SPC_0036_ll5usp.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227115/studiophotocreation/en-we_2v/SPC_0031_pzlb2d.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227115/studiophotocreation/en-we_2v/SPC_0030_jxtmes.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227112/studiophotocreation/en-we_2v/SPC_0024_cmu0oh.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227111/studiophotocreation/en-we_2v/SPC_0023_rwbfpq.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227110/studiophotocreation/en-we_2v/SPC_0023_2_szxauv.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227109/studiophotocreation/en-we_2v/SPC_0020_vmvf5u.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227107/studiophotocreation/en-we_2v/SPC_0019_qvh8we.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227107/studiophotocreation/en-we_2v/SPC_0017_njjp5g.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227106/studiophotocreation/en-we_2v/SPC_0016_fmlufg.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227116/studiophotocreation/en-we_2v/SPC_0015_pbvtw0.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227104/studiophotocreation/en-we_2v/SPC_0015_2_brq51x.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227102/studiophotocreation/en-we_2v/SPC_0014_smzvsc.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227102/studiophotocreation/en-we_2v/SPC_0012_twguuh.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227102/studiophotocreation/en-we_2v/SPC_0012_2_r2rp7b.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227099/studiophotocreation/en-we_2v/SPC_0011_qboi80.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227098/studiophotocreation/en-we_2v/SPC_0002_xlf5eh.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227097/studiophotocreation/en-we_2v/SPC_0002_3_ob1qxi.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227099/studiophotocreation/en-we_2v/SPC_0002_2_zaywdf.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227097/studiophotocreation/en-we_2v/IMG_0255_fndepf.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227094/studiophotocreation/en-we_2v/-0825_enoqhs.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227093/studiophotocreation/en-we_2v/-0820_te7dok.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227092/studiophotocreation/en-we_2v/-0816_gz6uwe.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227093/studiophotocreation/en-we_2v/-0802_jniea2.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227092/studiophotocreation/en-we_2v/-0799_m75m7p.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227090/studiophotocreation/en-we_2v/-0771_z4oltm.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227089/studiophotocreation/en-we_2v/-0770_ppnlkm.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227089/studiophotocreation/en-we_2v/-0768_a4sstn.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227089/studiophotocreation/en-we_2v/-0678_ygrh0f.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227087/studiophotocreation/en-we_2v/-0653_itmjhu.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227086/studiophotocreation/en-we_2v/-0628_dxjo4a.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227086/studiophotocreation/en-we_2v/-0617_klv77n.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227086/studiophotocreation/en-we_2v/-0571_a4zr8c.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227086/studiophotocreation/en-we_2v/-0514_aevil3.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227086/studiophotocreation/en-we_2v/-0408_jv4nae.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227084/studiophotocreation/en-we_2v/-0379_lrtttw.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227083/studiophotocreation/en-we_2v/-0303_rjpcqr.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227083/studiophotocreation/en-we_2v/-0245_p6c5td.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227083/studiophotocreation/en-we_2v/-0223_hml6mn.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227081/studiophotocreation/en-we_2v/-0217_wit6uj.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227081/studiophotocreation/en-we_2v/-0188_jzzlht.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227081/studiophotocreation/en-we_2v/-0184_rvodf9.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227081/studiophotocreation/en-we_2v/-0175_owt3wz.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227081/studiophotocreation/en-we_2v/-0146_oc7a2w.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227081/studiophotocreation/en-we_2v/-0143_jhuga8.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227081/studiophotocreation/en-we_2v/-0138_ynduwt.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227557/studiophotocreation/en-we_2v/-0130_rgohh5.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227557/studiophotocreation/en-we_2v/-0120_flglwj.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227557/studiophotocreation/en-we_2v/-0119_fwn26p.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227551/studiophotocreation/en-we_2v/-0110_ctxv35.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227549/studiophotocreation/en-we_2v/-0104_znigzi.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227543/studiophotocreation/en-we_2v/-0093_ninonx.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227543/studiophotocreation/en-we_2v/-0090_zfqu6i.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227543/studiophotocreation/en-we_2v/-0036_b1lca4.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227535/studiophotocreation/en-we_2v/-0035_wc7jg7.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227535/studiophotocreation/en-we_2v/-0026_opjfx1.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227534/studiophotocreation/en-we_2v/-0021_rydafl.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227527/studiophotocreation/en-we_2v/-0011_dze6au.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702227527/studiophotocreation/en-we_2v/-0003_ns0c0x.webp',
    alt: 'Photo from an english weddings in Paphos by StudioPhotoCreation',
    title: 'English Wedding'
  }
]

function EnglishWeddings () {
  return (
    <>
      <MetaTags
        metatitle={'English Weddings photos - Studio Photo Creation by D'}
        metadescription={
          'English weddings photos from wedding photographer Dimitris Domouchtsis'
        }
        metaurl={'https://www.studiophotocreationbyd.com/english-weddings'}
      />
      <MasonryImageList itemData={itemData} />
    </>
  )
}
export default EnglishWeddings
