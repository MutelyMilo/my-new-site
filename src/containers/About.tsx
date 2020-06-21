import React from 'react';
import styles from 'src/assets/less/About.less';
import img from 'src/assets/img/IMG_1861.jpeg'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.content}>
        <div className={styles.aboutMe}>
          <div className={styles.image}>
            <img src={img} alt=""/>
          </div>
          <div className={styles.text}>
            <h4>Who am i ？</h4>
            <p>一个伪全栈工程师，秀了一手好的 Ctrl C - Ctrl V，有的时候也可以叫我引擎工程师（Google，BaiDu）。</p>
            <p>好的程序员绝对是造福世界，改变世界。比尔盖茨用Windows改变了世界，扎克伯格用facebook连接了全世界，而我的代码能让你骂街。</p>
            <p>这里特别说一下关于 “不要自称为程序员” 的说法:</p>
            <p>首先我认同这样的说法，相比而言自己真不算什么程序员，但是人总要往高处走；So</p>
            <p>应该把自己描述成与增加收入、降低成本有关系的人，比如"xx产品的开发者”或”改进者"。</p>
            <p>有一个 Google 程序员的自我介绍，是这样写的："Google 公司97%的收入，与我的代码有关。"</p>
            <p>假装文艺的青年（30了还青年...）喜欢摄影，恼了就打游戏。</p>
            <p>有点儿爱干净，受不了自己的键盘挂油。</p>
            <p>也受不了屏幕有指纹，虽然同事常来指点江山，事后一定擦掉。</p>
            <p>所以，Common module 有精力自己写，也不要 6 months ago 的 package。</p>
            <p>代码不一定有注释，但是类型一定写的明明白白（不为别的，怕别人接手挨骂）。</p>
            <p>做这个Web没别的意思，就是闲着没事，毕竟公司的需求分分钟搞定了。</p>
            <h4>我会什么？</h4>
            <p>不谦虚的说，精通各种语言 Hello world（也有不会的，毕竟方言这么多）。</p>
            <h4>优势？</h4>
            <p>负责任，不喜欢堆功能，考虑优化和可维护性，要高质量产出，尽可能平行保证高效。</p>
            <p>不写别人看不懂的代码，只写看得懂有结构有规范的代码。</p>
            <h4>做过什么？</h4>
            <p>整个公司的中后台管理段建设，提升业务方的产出。是的，你们KPI高了，我KPI也高了。</p>
            <p>客户端开发的有Electron，React-Native，当然Flutter也玩只不过没上线项目，当然需要的话，也可以上。</p>
            <p>一些高公用质量模块的开发，项目解耦，抽离，重构，各种折腾。</p>
            <p>负责小组的日常开发，跟进度，对接产品业务方（和产品业务方互怼），详细的上级汇报。</p>
            <p>整过直播和IM，整过电商，整过政企服务，整过智慧城市...啥都整。</p>
            <h4>价值观？</h4>
            <p>客户第一，主动担责，上司易怒，删库跑路。</p>
            <p>共生，共死。</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;