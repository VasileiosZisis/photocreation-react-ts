import MasonryImageList from '../components/Gallery'
import MetaTags from '../components/MetaTags'

const itemData = [
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702129037/studiophotocreation/cy-we_2v/SPC_3192_ueixrp.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702129036/studiophotocreation/cy-we_2v/SPC_3185_p1fuxc.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702129035/studiophotocreation/cy-we_2v/SPC_3153_gf6q2w.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702129035/studiophotocreation/cy-we_2v/SPC_3140_mfqqdy.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702129020/studiophotocreation/cy-we_2v/SPC_3134_v7lt08.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702129020/studiophotocreation/cy-we_2v/SPC_3128_qh9eaj.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702129020/studiophotocreation/cy-we_2v/SPC_3087_s2lk8l.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702129020/studiophotocreation/cy-we_2v/SPC_3083_kfnraz.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702129020/studiophotocreation/cy-we_2v/SPC_3077_crpac5.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702129004/studiophotocreation/cy-we_2v/SPC_3063_fnzveq.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702129003/studiophotocreation/cy-we_2v/SPC_3052_tslnat.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702129002/studiophotocreation/cy-we_2v/SPC_3047_trxciq.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702129002/studiophotocreation/cy-we_2v/SPC_3042_pdbv3m.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702129002/studiophotocreation/cy-we_2v/SPC_3026_yvztny.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128986/studiophotocreation/cy-we_2v/SPC_3014_wlb6ji.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128985/studiophotocreation/cy-we_2v/SPC_3007_jlboht.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128985/studiophotocreation/cy-we_2v/SPC_3000_dhqzjz.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128985/studiophotocreation/cy-we_2v/SPC_2991_xbthnw.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128984/studiophotocreation/cy-we_2v/SPC_2956_wqdhdl.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128971/studiophotocreation/cy-we_2v/SPC_2955_bthqlz.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128971/studiophotocreation/cy-we_2v/SPC_2947_ou1rwy.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128971/studiophotocreation/cy-we_2v/SPC_2942_s5d1c7.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128971/studiophotocreation/cy-we_2v/SPC_2929_ntcx6c.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128962/studiophotocreation/cy-we_2v/SPC_2923_tpjqwh.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128962/studiophotocreation/cy-we_2v/SPC_2920_gt1gum.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128955/studiophotocreation/cy-we_2v/SPC_2918_j3lonj.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128953/studiophotocreation/cy-we_2v/SPC_2907_shkhtt.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128946/studiophotocreation/cy-we_2v/SPC_2902_kjwnbb.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128944/studiophotocreation/cy-we_2v/SPC_2895_f6rsxq.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128937/studiophotocreation/cy-we_2v/SPC_2891_u18ksh.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128935/studiophotocreation/cy-we_2v/SPC_2888_k1m6ym.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128928/studiophotocreation/cy-we_2v/SPC_2886_hwndmy.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128925/studiophotocreation/cy-we_2v/SPC_2878_mfpaf8.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128917/studiophotocreation/cy-we_2v/SPC_2875_oqqqiy.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128916/studiophotocreation/cy-we_2v/SPC_2859_qy0qny.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128916/studiophotocreation/cy-we_2v/SPC_2847_s8g1jz.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128917/studiophotocreation/cy-we_2v/SPC_2837_baysc3.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128906/studiophotocreation/cy-we_2v/SPC_2833_clph89.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128906/studiophotocreation/cy-we_2v/SPC_2813_czc2qq.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128905/studiophotocreation/cy-we_2v/SPC_2769_dy5yar.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128905/studiophotocreation/cy-we_2v/SPC_2761_io7bqr.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128892/studiophotocreation/cy-we_2v/SPC_2743_pargqi.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128892/studiophotocreation/cy-we_2v/SPC_2742_kjuuf6.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128892/studiophotocreation/cy-we_2v/SPC_2737_zl500c.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128892/studiophotocreation/cy-we_2v/SPC_2729_cyhrfp.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128892/studiophotocreation/cy-we_2v/SPC_2721_rg0jge.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128879/studiophotocreation/cy-we_2v/SPC_2715_r4pnlk.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128880/studiophotocreation/cy-we_2v/SPC_2714_mn6eib.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128879/studiophotocreation/cy-we_2v/SPC_2710_yo7qvj.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128879/studiophotocreation/cy-we_2v/SPC_2706_n46hmc.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128868/studiophotocreation/cy-we_2v/SPC_2705_phg0y7.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128868/studiophotocreation/cy-we_2v/SPC_2702_x4ufd4.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128868/studiophotocreation/cy-we_2v/SPC_2701_wycibf.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128868/studiophotocreation/cy-we_2v/SPC_2692_sftfse.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128859/studiophotocreation/cy-we_2v/SPC_2687_eglaye.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128859/studiophotocreation/cy-we_2v/SPC_2682_zb7i9r.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128859/studiophotocreation/cy-we_2v/SPC_2679_mwkolt.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128849/studiophotocreation/cy-we_2v/SPC_2676_ittnhc.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128849/studiophotocreation/cy-we_2v/SPC_2665_aklvja.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128849/studiophotocreation/cy-we_2v/SPC_2660_iwioso.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128849/studiophotocreation/cy-we_2v/SPC_2657_yuyezw.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128841/studiophotocreation/cy-we_2v/SPC_2619_o30egl.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128841/studiophotocreation/cy-we_2v/SPC_2615_fzy0cr.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128840/studiophotocreation/cy-we_2v/SPC_2612_tkabfb.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128826/studiophotocreation/cy-we_2v/SPC_2596_k0efbe.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128823/studiophotocreation/cy-we_2v/SPC_2587_ub5lf3.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128823/studiophotocreation/cy-we_2v/SPC_2581_ztxekn.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128823/studiophotocreation/cy-we_2v/SPC_2578_skxnff.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128823/studiophotocreation/cy-we_2v/SPC_2575_egalhw.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128823/studiophotocreation/cy-we_2v/SPC_2551_qfyacf.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128822/studiophotocreation/cy-we_2v/SPC_2549_ewplbg.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128811/studiophotocreation/cy-we_2v/SPC_2525_wivn0l.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128811/studiophotocreation/cy-we_2v/SPC_2518_pweivw.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128810/studiophotocreation/cy-we_2v/SPC_2512_e4lq6w.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128810/studiophotocreation/cy-we_2v/SPC_2505_xkmt0c.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128799/studiophotocreation/cy-we_2v/SPC_2501_rf7lo9.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128799/studiophotocreation/cy-we_2v/SPC_2496_ey29rj.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128798/studiophotocreation/cy-we_2v/SPC_2489_jsjgqe.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128798/studiophotocreation/cy-we_2v/SPC_2475_s8ho8l.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128785/studiophotocreation/cy-we_2v/SPC_2468_lijome.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128785/studiophotocreation/cy-we_2v/SPC_2461_xw2dnb.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128784/studiophotocreation/cy-we_2v/SPC_2460_wfavbw.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128784/studiophotocreation/cy-we_2v/SPC_2454_pxqopw.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128784/studiophotocreation/cy-we_2v/SPC_2447_comtsz.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128776/studiophotocreation/cy-we_2v/SPC_2432_pnd62z.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128775/studiophotocreation/cy-we_2v/SPC_2424_zcw67p.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128773/studiophotocreation/cy-we_2v/SPC_2417_qnz5ct.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128765/studiophotocreation/cy-we_2v/SPC_2406_tdzptz.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128765/studiophotocreation/cy-we_2v/SPC_2402_j3s97m.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128764/studiophotocreation/cy-we_2v/SPC_2401_asueaj.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128757/studiophotocreation/cy-we_2v/SPC_2398_grz1wg.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128756/studiophotocreation/cy-we_2v/SPC_2397_wy7rew.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128756/studiophotocreation/cy-we_2v/SPC_2393_ttlwov.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128747/studiophotocreation/cy-we_2v/SPC_2390_q39eqs.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128747/studiophotocreation/cy-we_2v/SPC_2388_rdrexq.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128747/studiophotocreation/cy-we_2v/SPC_2386_nbxn1j.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128737/studiophotocreation/cy-we_2v/SPC_2376_pr02oe.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128737/studiophotocreation/cy-we_2v/SPC_2375_e2ibpe.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128737/studiophotocreation/cy-we_2v/SPC_2368_rjeaak.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128736/studiophotocreation/cy-we_2v/SPC_2353_fllu25.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128723/studiophotocreation/cy-we_2v/SPC_2351_bhspuj.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128722/studiophotocreation/cy-we_2v/SPC_2336_jhi3uu.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128722/studiophotocreation/cy-we_2v/SPC_2331_gowmqm.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128722/studiophotocreation/cy-we_2v/SPC_2330_gklce2.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128723/studiophotocreation/cy-we_2v/SPC_2329_pzzceb.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128710/studiophotocreation/cy-we_2v/SPC_2325_yjd1ge.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128709/studiophotocreation/cy-we_2v/SPC_2314_ura9z7.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128710/studiophotocreation/cy-we_2v/SPC_2305_cnav1f.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128709/studiophotocreation/cy-we_2v/SPC_2299_dd1fa0.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128697/studiophotocreation/cy-we_2v/SPC_2296_r2ikde.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128696/studiophotocreation/cy-we_2v/SPC_2289_xegcjd.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128697/studiophotocreation/cy-we_2v/SPC_2286_btabu7.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128696/studiophotocreation/cy-we_2v/SPC_2284_vmp5tw.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128682/studiophotocreation/cy-we_2v/SPC_2278_cqptje.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128681/studiophotocreation/cy-we_2v/SPC_2274_ueyfig.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128681/studiophotocreation/cy-we_2v/SPC_2268_m94spb.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128681/studiophotocreation/cy-we_2v/SPC_2266_r4hbmb.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128681/studiophotocreation/cy-we_2v/SPC_2257_x2od5g.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128670/studiophotocreation/cy-we_2v/SPC_2229_a0wrz9.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128669/studiophotocreation/cy-we_2v/SPC_2224_qgyuj6.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128670/studiophotocreation/cy-we_2v/SPC_2221_cwgy2t.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128663/studiophotocreation/cy-we_2v/SPC_2218_ftnsvw.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128669/studiophotocreation/cy-we_2v/SPC_2218-2_o811ba.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128661/studiophotocreation/cy-we_2v/SPC_2216_fcypcd.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128655/studiophotocreation/cy-we_2v/SPC_2215_pd6uyg.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128654/studiophotocreation/cy-we_2v/SPC_2202_mdslpq.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128646/studiophotocreation/cy-we_2v/SPC_2196_pimbki.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128646/studiophotocreation/cy-we_2v/SPC_2188_ba3efo.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128645/studiophotocreation/cy-we_2v/SPC_2181_niwb5c.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128637/studiophotocreation/cy-we_2v/SPC_2172_ygzddp.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128636/studiophotocreation/cy-we_2v/SPC_2160_ytbnjf.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128636/studiophotocreation/cy-we_2v/SPC_2156_rzdecn.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128626/studiophotocreation/cy-we_2v/SPC_2144_is6kjl.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128636/studiophotocreation/cy-we_2v/SPC_2144-2_mhydio.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128626/studiophotocreation/cy-we_2v/SPC_2137_jtehb2.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128625/studiophotocreation/cy-we_2v/SPC_2136_quvsb4.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128625/studiophotocreation/cy-we_2v/SPC_2134_ivgxa4.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128616/studiophotocreation/cy-we_2v/SPC_2133_rnv5bl.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128616/studiophotocreation/cy-we_2v/SPC_2122_y8uwb9.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128616/studiophotocreation/cy-we_2v/SPC_2119_iwrcjn.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128616/studiophotocreation/cy-we_2v/SPC_2113_rmuqss.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128603/studiophotocreation/cy-we_2v/SPC_2112_hpy2ud.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128603/studiophotocreation/cy-we_2v/SPC_2110_efayas.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128603/studiophotocreation/cy-we_2v/SPC_2106_nwsqez.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128602/studiophotocreation/cy-we_2v/SPC_2103_sllwxu.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128602/studiophotocreation/cy-we_2v/SPC_2093_qupaai.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128590/studiophotocreation/cy-we_2v/SPC_2091_icxgbj.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128590/studiophotocreation/cy-we_2v/SPC_2084_ixcjye.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128590/studiophotocreation/cy-we_2v/SPC_2081_evzaye.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128589/studiophotocreation/cy-we_2v/SPC_2080_nifdm3.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128590/studiophotocreation/cy-we_2v/SPC_2070_xtv99o.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128582/studiophotocreation/cy-we_2v/SPC_2069_wdgwhz.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128579/studiophotocreation/cy-we_2v/SPC_2066_y2kg1d.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128579/studiophotocreation/cy-we_2v/SPC_2062_fe94lf.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128578/studiophotocreation/cy-we_2v/SPC_2057_kbzfm3.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128568/studiophotocreation/cy-we_2v/SPC_2049_luzgnz.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128568/studiophotocreation/cy-we_2v/SPC_2023_lurx9w.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128568/studiophotocreation/cy-we_2v/SPC_2000_totjkv.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128567/studiophotocreation/cy-we_2v/SPC_1992_rcypp1.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128559/studiophotocreation/cy-we_2v/SPC_1988_xjxyi7.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128559/studiophotocreation/cy-we_2v/SPC_1980_kyoxrf.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128558/studiophotocreation/cy-we_2v/SPC_1978_d2tyhs.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128547/studiophotocreation/cy-we_2v/SPC_1971_akhr5a.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128546/studiophotocreation/cy-we_2v/SPC_1970_pnjbkc.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128546/studiophotocreation/cy-we_2v/SPC_1962_j3nucl.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128546/studiophotocreation/cy-we_2v/SPC_1953_fnlkaa.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128546/studiophotocreation/cy-we_2v/SPC_1950_ymqkli.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128539/studiophotocreation/cy-we_2v/SPC_1943_g6urx2.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128537/studiophotocreation/cy-we_2v/SPC_1898_fwvwjc.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128536/studiophotocreation/cy-we_2v/SPC_1896_yvvc6h.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128528/studiophotocreation/cy-we_2v/SPC_1872_edqxfc.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128527/studiophotocreation/cy-we_2v/SPC_1870_zkvmer.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128527/studiophotocreation/cy-we_2v/SPC_1869_btjlnw.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128527/studiophotocreation/cy-we_2v/SPC_1856_rthsmh.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128516/studiophotocreation/cy-we_2v/SPC_1852_yfjcpm.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128515/studiophotocreation/cy-we_2v/SPC_1850_uj1xzs.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128515/studiophotocreation/cy-we_2v/SPC_1822_yiz0wr.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128515/studiophotocreation/cy-we_2v/SPC_1819_ohoakf.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128515/studiophotocreation/cy-we_2v/SPC_1816_fxzsae.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128504/studiophotocreation/cy-we_2v/SPC_1815_anspvk.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128504/studiophotocreation/cy-we_2v/SPC_1796_gjwxtp.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128504/studiophotocreation/cy-we_2v/SPC_1794_vh0rps.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128503/studiophotocreation/cy-we_2v/SPC_1794-2_uhuk6o.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128503/studiophotocreation/cy-we_2v/SPC_1785_dhcceo.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128494/studiophotocreation/cy-we_2v/SPC_1784_qtywgq.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128493/studiophotocreation/cy-we_2v/SPC_1783_xh8gr1.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128492/studiophotocreation/cy-we_2v/SPC_1778_gi9hxu.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128492/studiophotocreation/cy-we_2v/SPC_1776_ccgs2l.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128493/studiophotocreation/cy-we_2v/SPC_1755_gnm17j.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128484/studiophotocreation/cy-we_2v/SPC_1745_knjo1a.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128484/studiophotocreation/cy-we_2v/SPC_1731_mkjjsv.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128483/studiophotocreation/cy-we_2v/SPC_1728_hncnpx.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128482/studiophotocreation/cy-we_2v/SPC_1715_o1f0do.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128478/studiophotocreation/cy-we_2v/SPC_1698_jnieuc.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128477/studiophotocreation/cy-we_2v/SPC_1697_yqq4ol.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128473/studiophotocreation/cy-we_2v/SPC_1685_zjkzgq.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128471/studiophotocreation/cy-we_2v/SPC_1679_jutxto.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128467/studiophotocreation/cy-we_2v/SPC_1675_hdbk5l.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128460/studiophotocreation/cy-we_2v/SPC_1671_ctc0bv.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128461/studiophotocreation/cy-we_2v/SPC_1670_gow7v5.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128460/studiophotocreation/cy-we_2v/SPC_1659_flbcez.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128460/studiophotocreation/cy-we_2v/SPC_1652_a5hrzu.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128460/studiophotocreation/cy-we_2v/SPC_1634_t7mg0r.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128451/studiophotocreation/cy-we_2v/SPC_1630_c48vtf.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128451/studiophotocreation/cy-we_2v/SPC_1628_g3riqy.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128450/studiophotocreation/cy-we_2v/SPC_1624_on7f58.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128450/studiophotocreation/cy-we_2v/SPC_1622-2_drsoxb.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128445/studiophotocreation/cy-we_2v/SPC_1621_wquheq.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128439/studiophotocreation/cy-we_2v/SPC_1618_eliitb.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128444/studiophotocreation/cy-we_2v/SPC_1618-2_damkww.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128438/studiophotocreation/cy-we_2v/SPC_1614_glddos.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128438/studiophotocreation/cy-we_2v/SPC_1608_z7s0wu.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128431/studiophotocreation/cy-we_2v/SPC_1604_nxzx3z.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128438/studiophotocreation/cy-we_2v/SPC_1604-2_abltcc.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128431/studiophotocreation/cy-we_2v/SPC_1601_aw6ovr.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128431/studiophotocreation/cy-we_2v/SPC_1599_w5j9m7.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128430/studiophotocreation/cy-we_2v/SPC_1593_t7fqgs.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128422/studiophotocreation/cy-we_2v/SPC_1589_ob7mfq.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128421/studiophotocreation/cy-we_2v/SPC_1576_cyvkn3.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128421/studiophotocreation/cy-we_2v/SPC_1565_xz8hax.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128421/studiophotocreation/cy-we_2v/SPC_1564_urj7rh.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128420/studiophotocreation/cy-we_2v/SPC_1558_fqn0xw.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128411/studiophotocreation/cy-we_2v/SPC_1557_hon2zc.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128410/studiophotocreation/cy-we_2v/SPC_1535_gqptgr.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128410/studiophotocreation/cy-we_2v/SPC_1532_upqoja.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128410/studiophotocreation/cy-we_2v/SPC_1493_ysd2qy.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128409/studiophotocreation/cy-we_2v/SPC_1486_yxssob.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128404/studiophotocreation/cy-we_2v/SPC_1479_o6ihel.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128399/studiophotocreation/cy-we_2v/SPC_1466_ba6tc3.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128398/studiophotocreation/cy-we_2v/SPC_1460_bcvttc.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128398/studiophotocreation/cy-we_2v/SPC_1458_zalqmn.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128398/studiophotocreation/cy-we_2v/SPC_1456_ajwkf9.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128388/studiophotocreation/cy-we_2v/SPC_1453_bfmzik.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128387/studiophotocreation/cy-we_2v/SPC_1442_iq0os3.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128387/studiophotocreation/cy-we_2v/SPC_1438_pudwlc.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128387/studiophotocreation/cy-we_2v/SPC_1425_kw2fil.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128388/studiophotocreation/cy-we_2v/SPC_1424_gjyepj.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128380/studiophotocreation/cy-we_2v/SPC_1419_lbpkla.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128376/studiophotocreation/cy-we_2v/SPC_1395_q3rk9m.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128376/studiophotocreation/cy-we_2v/SPC_1389_p1oiub.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128375/studiophotocreation/cy-we_2v/SPC_1370_xyowhj.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128375/studiophotocreation/cy-we_2v/SPC_1349_quibvh.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128366/studiophotocreation/cy-we_2v/SPC_1339_jdiauh.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128365/studiophotocreation/cy-we_2v/SPC_1323_zy3foa.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128365/studiophotocreation/cy-we_2v/SPC_1320_aqcjys.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128365/studiophotocreation/cy-we_2v/SPC_1306_uxb3cb.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128364/studiophotocreation/cy-we_2v/SPC_1302_kicyst.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128354/studiophotocreation/cy-we_2v/SPC_1299_ik0vvf.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128354/studiophotocreation/cy-we_2v/SPC_1263_dkkznv.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128354/studiophotocreation/cy-we_2v/SPC_1225_yva9xt.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128353/studiophotocreation/cy-we_2v/SPC_1203_e1xmex.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128353/studiophotocreation/cy-we_2v/SPC_1193_jyfsmj.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128344/studiophotocreation/cy-we_2v/SPC_1186_ip9igq.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128344/studiophotocreation/cy-we_2v/SPC_1174_ocqdxv.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128344/studiophotocreation/cy-we_2v/SPC_1168_n6mnqh.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128343/studiophotocreation/cy-we_2v/SPC_1162_ibqoha.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128343/studiophotocreation/cy-we_2v/SPC_1144_ujgjou.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128336/studiophotocreation/cy-we_2v/SPC_1139_bkczxg.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128336/studiophotocreation/cy-we_2v/SPC_1136_fmgxs0.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128335/studiophotocreation/cy-we_2v/SPC_1128_c4cuvq.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128331/studiophotocreation/cy-we_2v/SPC_1125_dwtpor.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128330/studiophotocreation/cy-we_2v/SPC_1124_rfrtdv.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128326/studiophotocreation/cy-we_2v/SPC_1121_ek5ubo.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128323/studiophotocreation/cy-we_2v/SPC_1117_lzmpqs.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128322/studiophotocreation/cy-we_2v/SPC_1116_tqe64k.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128318/studiophotocreation/cy-we_2v/SPC_1112_qxerqr.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128317/studiophotocreation/cy-we_2v/SPC_1110_ke1vrr.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128308/studiophotocreation/cy-we_2v/SPC_1088_wlrxaz.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128308/studiophotocreation/cy-we_2v/SPC_1086_kkvt4g.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128308/studiophotocreation/cy-we_2v/SPC_1059_q7vzxe.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128308/studiophotocreation/cy-we_2v/SPC_1050_fiz63d.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128307/studiophotocreation/cy-we_2v/SPC_1042_le9ipx.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128301/studiophotocreation/cy-we_2v/SPC_1036_dkwuwa.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128302/studiophotocreation/cy-we_2v/SPC_1035_azg5r4.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128300/studiophotocreation/cy-we_2v/SPC_1028_fzxuqz.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128295/studiophotocreation/cy-we_2v/SPC_1027_sn27il.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128294/studiophotocreation/cy-we_2v/SPC_1024_ngks2g.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128294/studiophotocreation/cy-we_2v/SPC_1017_wfpp8a.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128287/studiophotocreation/cy-we_2v/SPC_1015_mt5krl.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128287/studiophotocreation/cy-we_2v/SPC_1013_tdtwkj.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128286/studiophotocreation/cy-we_2v/SPC_1010_dhszbo.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128286/studiophotocreation/cy-we_2v/SPC_1006_ddsot0.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128281/studiophotocreation/cy-we_2v/SPC_0997_cixk5y.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128280/studiophotocreation/cy-we_2v/SPC_0989_rhgxdi.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128279/studiophotocreation/cy-we_2v/SPC_0979_e6iosh.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128279/studiophotocreation/cy-we_2v/SPC_0974_ip0rat.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128273/studiophotocreation/cy-we_2v/SPC_0972_hr6c2c.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128272/studiophotocreation/cy-we_2v/SPC_0964_q8ae7p.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128272/studiophotocreation/cy-we_2v/SPC_0930_lbtq1h.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128272/studiophotocreation/cy-we_2v/SPC_0920_yi787z.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128266/studiophotocreation/cy-we_2v/SPC_0898_jegm4v.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128265/studiophotocreation/cy-we_2v/SPC_0892_u3wpqz.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128265/studiophotocreation/cy-we_2v/SPC_0882_hvxqcw.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128264/studiophotocreation/cy-we_2v/SPC_0871_ral85f.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128259/studiophotocreation/cy-we_2v/SPC_0865_g8wxf2.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128259/studiophotocreation/cy-we_2v/SPC_0856_qlvxfu.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128259/studiophotocreation/cy-we_2v/SPC_0853_dd9zpz.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128255/studiophotocreation/cy-we_2v/SPC_0851_ymppnq.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128254/studiophotocreation/cy-we_2v/SPC_0849_toej0h.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128253/studiophotocreation/cy-we_2v/SPC_0837_gredti.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128248/studiophotocreation/cy-we_2v/SPC_0831_rg1lcz.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128247/studiophotocreation/cy-we_2v/SPC_0829_vmclj3.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128247/studiophotocreation/cy-we_2v/SPC_0824_m1evvl.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128247/studiophotocreation/cy-we_2v/SPC_0815_jp3wyx.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128240/studiophotocreation/cy-we_2v/SPC_0809_ejkwvi.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128240/studiophotocreation/cy-we_2v/SPC_0803_hhy9e9.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128240/studiophotocreation/cy-we_2v/SPC_0802_hkbysy.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128239/studiophotocreation/cy-we_2v/SPC_0799_rsb1i9.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128239/studiophotocreation/cy-we_2v/SPC_0797_hsjlop.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128232/studiophotocreation/cy-we_2v/SPC_0788_kh0gte.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128232/studiophotocreation/cy-we_2v/SPC_0776_erchcw.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128232/studiophotocreation/cy-we_2v/SPC_0775_cssm9c.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128231/studiophotocreation/cy-we_2v/SPC_0773_vqorgm.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128231/studiophotocreation/cy-we_2v/SPC_0773-2_nfvhbt.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128225/studiophotocreation/cy-we_2v/SPC_0759_kbpfo1.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128224/studiophotocreation/cy-we_2v/SPC_0757_qyohek.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128224/studiophotocreation/cy-we_2v/SPC_0753_num60j.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128224/studiophotocreation/cy-we_2v/SPC_0749_e4m6vw.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128224/studiophotocreation/cy-we_2v/SPC_0747_ziqlv4.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128219/studiophotocreation/cy-we_2v/SPC_0740_x44rem.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128219/studiophotocreation/cy-we_2v/SPC_0739_nijxfi.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128218/studiophotocreation/cy-we_2v/SPC_0731_kuppnj.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128215/studiophotocreation/cy-we_2v/SPC_0728_knmquh.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128214/studiophotocreation/cy-we_2v/SPC_0725_diceud.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128214/studiophotocreation/cy-we_2v/SPC_0721_ad9a33.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128209/studiophotocreation/cy-we_2v/SPC_0716_spnenz.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128208/studiophotocreation/cy-we_2v/SPC_0715_pguipl.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128208/studiophotocreation/cy-we_2v/SPC_0712_neidr3.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128203/studiophotocreation/cy-we_2v/SPC_0698_smen79.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128208/studiophotocreation/cy-we_2v/SPC_0698-2_brp9l5.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128203/studiophotocreation/cy-we_2v/SPC_0679_kq1tuq.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128203/studiophotocreation/cy-we_2v/SPC_0667_bdvyoy.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128202/studiophotocreation/cy-we_2v/SPC_0656_uyzxzx.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128197/studiophotocreation/cy-we_2v/SPC_0651_vv7qxb.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128196/studiophotocreation/cy-we_2v/SPC_0646_lg64tc.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128196/studiophotocreation/cy-we_2v/SPC_0632_k3vil9.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128196/studiophotocreation/cy-we_2v/SPC_0632-2_xfkqjh.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128195/studiophotocreation/cy-we_2v/SPC_0631_v7jxhr.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128191/studiophotocreation/cy-we_2v/SPC_0623_as6xpd.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128191/studiophotocreation/cy-we_2v/SPC_0622_u2zlgq.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128190/studiophotocreation/cy-we_2v/SPC_0620_qeaogd.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128190/studiophotocreation/cy-we_2v/SPC_0617_pm9ey1.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128186/studiophotocreation/cy-we_2v/SPC_0607_auuo60.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128185/studiophotocreation/cy-we_2v/SPC_0597_vfrkqp.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128185/studiophotocreation/cy-we_2v/SPC_0593_dkhpes.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128185/studiophotocreation/cy-we_2v/SPC_0592_ksdjr3.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128181/studiophotocreation/cy-we_2v/SPC_0590_akzvf5.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128180/studiophotocreation/cy-we_2v/SPC_0588_ls9lrr.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128180/studiophotocreation/cy-we_2v/SPC_0583_ycl1ri.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128180/studiophotocreation/cy-we_2v/SPC_0571_xbwnlv.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128175/studiophotocreation/cy-we_2v/SPC_0564_xboejl.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128174/studiophotocreation/cy-we_2v/SPC_0557_msjwgq.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128174/studiophotocreation/cy-we_2v/SPC_0553_wjwpu8.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128174/studiophotocreation/cy-we_2v/SPC_0552_rp7wkb.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128170/studiophotocreation/cy-we_2v/SPC_0549_z648af.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128174/studiophotocreation/cy-we_2v/SPC_0549-2_ujz9rm.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128170/studiophotocreation/cy-we_2v/SPC_0542_dnelld.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128169/studiophotocreation/cy-we_2v/SPC_0541_hybvyw.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128167/studiophotocreation/cy-we_2v/SPC_0540_jv9rii.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128166/studiophotocreation/cy-we_2v/SPC_0532_rvqi4b.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128165/studiophotocreation/cy-we_2v/SPC_0528_zljtkd.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128161/studiophotocreation/cy-we_2v/SPC_0523_tbrtfp.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128161/studiophotocreation/cy-we_2v/SPC_0520_jd0w9t.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128160/studiophotocreation/cy-we_2v/SPC_0495_gdzkon.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128160/studiophotocreation/cy-we_2v/SPC_0387_c8egld.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128160/studiophotocreation/cy-we_2v/SPC_0276_mkfjo7.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128156/studiophotocreation/cy-we_2v/SPC_0262_ivjvf2.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128156/studiophotocreation/cy-we_2v/SPC_0255_zdlet5.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128156/studiophotocreation/cy-we_2v/SPC_0251_kedawk.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128156/studiophotocreation/cy-we_2v/SPC_0248_umq5dn.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128152/studiophotocreation/cy-we_2v/SPC_0226_ionjiz.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128152/studiophotocreation/cy-we_2v/SPC_0220_thnona.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128151/studiophotocreation/cy-we_2v/SPC_0210_zdniww.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128152/studiophotocreation/cy-we_2v/SPC_0193_zmlxy2.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128148/studiophotocreation/cy-we_2v/SPC_0183_bquzxg.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128148/studiophotocreation/cy-we_2v/SPC_0150_ax84c2.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128148/studiophotocreation/cy-we_2v/SPC_0143_domcfh.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128147/studiophotocreation/cy-we_2v/SPC_0129_uycpoc.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128145/studiophotocreation/cy-we_2v/SPC_0118_phby4x.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128144/studiophotocreation/cy-we_2v/SPC_0113_tz7l0m.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128143/studiophotocreation/cy-we_2v/SPC_0109_au116w.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128143/studiophotocreation/cy-we_2v/SPC_0107_kzphof.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128141/studiophotocreation/cy-we_2v/SPC_0103_dux99j.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128140/studiophotocreation/cy-we_2v/SPC_0097_wg7cp6.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128140/studiophotocreation/cy-we_2v/SPC_0094_krpnso.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128140/studiophotocreation/cy-we_2v/SPC_0091_laiz0x.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128137/studiophotocreation/cy-we_2v/SPC_0090_yleazd.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128136/studiophotocreation/cy-we_2v/SPC_0081_p4aixl.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128136/studiophotocreation/cy-we_2v/SPC_0076_r8jhnr.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128136/studiophotocreation/cy-we_2v/SPC_0066_twmbfq.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128136/studiophotocreation/cy-we_2v/SPC_0062_fvdzdy.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128132/studiophotocreation/cy-we_2v/SPC_0056_ljsian.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128132/studiophotocreation/cy-we_2v/SPC_0056-2_f4sx4k.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128132/studiophotocreation/cy-we_2v/SPC_0054_ptaszp.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128132/studiophotocreation/cy-we_2v/SPC_0048_pqgjof.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128132/studiophotocreation/cy-we_2v/SPC_0046_yinq7c.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128129/studiophotocreation/cy-we_2v/SPC_0045_xxgovz.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128129/studiophotocreation/cy-we_2v/SPC_0043_jk94c6.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128129/studiophotocreation/cy-we_2v/SPC_0041_rpzfm9.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128128/studiophotocreation/cy-we_2v/SPC_0037_xggfuu.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128125/studiophotocreation/cy-we_2v/SPC_0032_g53ofi.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128124/studiophotocreation/cy-we_2v/SPC_0029_ifqfvw.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128124/studiophotocreation/cy-we_2v/SPC_0026_ctyuoa.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128124/studiophotocreation/cy-we_2v/SPC_0020_qcyjyd.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128124/studiophotocreation/cy-we_2v/SPC_0013_syozhi.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128124/studiophotocreation/cy-we_2v/SPC_0007_yomraa.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128123/studiophotocreation/cy-we_2v/SPC_0006_kilopx.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128123/studiophotocreation/cy-we_2v/SPC_0004_ozkad8.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128123/studiophotocreation/cy-we_2v/SPC_0003_qzr8o6.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128123/studiophotocreation/cy-we_2v/SPC_0001_m0cxcr.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128122/studiophotocreation/cy-we_2v/IMG_0072_o4arlh.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128124/studiophotocreation/cy-we_2v/IMG_0066_rmt7g1.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128122/studiophotocreation/cy-we_2v/DJI_0052_yp9ywb.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128121/studiophotocreation/cy-we_2v/DJI_0048_wrrnsu.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128121/studiophotocreation/cy-we_2v/DJI_0042_ivnkrb.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128124/studiophotocreation/cy-we_2v/DJI_0039_c8k5r2.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128125/studiophotocreation/cy-we_2v/DJI_0033_zm7dll.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128122/studiophotocreation/cy-we_2v/DJI_0028_hlsywz.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128120/studiophotocreation/cy-we_2v/DJI_0021_qmcejc.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128121/studiophotocreation/cy-we_2v/DJI_0017_emzrtk.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  },
  {
    url: 'https://res.cloudinary.com/dmdbza74n/image/upload/v1702128119/studiophotocreation/cy-we_2v/DJI_0016_g83lex.webp',
    alt: 'Photo from a cypriot wedding in Paphos by StudioPhotoCreation',
    title: 'Cypriot Wedding'
  }
]

function CypriotWeddings () {
  return (
    <>
      <MetaTags
        metatitle={'Cypriot Wedding photos - Studio Photo Creation by D'}
        metadescription={
          'Cypriot wedding photos from wedding photographer Dimitris Domouchtsis'
        }
        metaurl={'https://www.studiophotocreationbyd.com/cypriot-weddings'}
      />
      <MasonryImageList itemData={itemData} />
    </>
  )
}

export default CypriotWeddings
