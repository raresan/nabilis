import star1 from '@/assets/images/star-1.png'
import star2 from '@/assets/images/star-2.png'
import star3 from '@/assets/images/star-3.png'

import Star from '@/components/ui/Star'

import s from './Stars.module.scss'

const Stars = () => {
  return (
    <div className={s.stars}>
      {/* Left side */}
      <Star src={star1} className={s.star} delay={0} />
      <Star src={star2} className={s.star} delay={0.3} />
      <Star src={star3} className={s.star} delay={1.2} />
      <Star src={star2} className={s.star} delay={0.7} />
      <Star src={star2} className={s.star} delay={1.5} />
      <Star src={star3} className={s.star} delay={0.4} />
      <Star src={star3} className={s.star} delay={1.8} />
      <Star src={star1} className={s.star} delay={0.9} />

      {/* Right side */}
      <Star src={star1} className={s.star} delay={0.2} />
      <Star src={star2} className={s.star} delay={1.1} />
      <Star src={star3} className={s.star} delay={0.6} />
      <Star src={star1} className={s.star} delay={1.4} />
      <Star src={star3} className={s.star} delay={0.1} />
      <Star src={star2} className={s.star} delay={1.7} />
      <Star src={star3} className={s.star} delay={0.5} />
      <Star src={star1} className={s.star} delay={1.3} />
    </div>
  )
}

export default Stars
