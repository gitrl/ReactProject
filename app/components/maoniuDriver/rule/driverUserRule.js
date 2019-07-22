import React from 'react';
import {
  Container,
  Accordion,
} from 'amazeui-touch';
import '../../../style/public.css'
import '../../../style/rule.css';
class AccordionExample extends React.Component{
  componentWillMount(){
    document.title='牦牛司机《用户协议》';
    document.body.style.background='#fff';
  }
  render() {
    return (
      <div className="index">
        <div className="cancelRule">
          <div>
            <div className="rule-header fontSize25">法律申明</div>
            <div className="rule-content">
              <p>
                    访问、浏览或使用牦牛司机平台，以下统称“牦牛司机”，表明您已阅读、理解并同意接受以下条款的约束，并遵守所有适用的法律和法规。
                您一旦使用牦牛司机，则须秉着诚信的原则遵守以下条款。
              </p>
            </div>
          </div>
          <div>
            <div className="rule-header fontSize25">一般原则</div>
            <div className="rule-content">
              <p>
                以下规则适用于所有牦牛司机用户或浏览者，牦牛司机可能随时修改这些条款。
                您应经常访问本页面以了解当前的条款，因为这些条款与您密切相关。
                这些条款的某些条文也可能被牦牛司机平台中某些页面上或某些具体服务明确指定的法律通告或条款所取代，您应该了解这些内容，一旦接受本条款，
                即意味着您已经同时详细阅读并接受了这些被引用或取代的条款。
              </p>
            </div>
          </div>
          <div>
            <div className="rule-header fontSize25">权利说明</div>
            <div className="rule-content">
              <p>
                西藏佳斯特信息技术有限公司（以下称“本公司”) 对其发行的或与合作公司共同发行的包括但不限于提供的软件及相关产品或服务的全部内容，享有知识产权，受法律保护。
                如果相关内容未含权利声明，并不代表本公司对其不享有权利和不主张权利，您应根据法律、法规及诚信原则尊重权利人的合法权益并合法使用该内容。
                未经西藏佳斯特信息技术有限公司书面许可，任何单位及个人不得以任何方式或理由对上述软件、产品、服务、信息、文字的任何部分进行使用、复制、修改、抄录、传播或与其它产品捆绑使用、销售, 或以超级链路连接或传送、存储于信息检索系统或者其他任何商业目的的使用，但对于非商业目的的、个人使用的下载或打印（未作修改，且须保留该内容中的版权说明或其他所有权的说明）除外。
                上述软件中使用和显示的商标和标识（以下统称“商标”) 是西藏佳斯特信息技术有限公司及其关联公司在出行服务及其它相关领域内注册和未注册的有关商标，受法律保护，但注明属于其他方拥有的商标、标志、商号除外。该等软件中所载的任何内容，未经西藏佳斯特信息技术有限公司书面许可，任何人不得以任何方式使用牦牛司机名称及相关商标、标识。
              </p>
            </div>
          </div>
          <div>
            <div className="rule-header fontSize25">用户信息</div>
            <div className="rule-content">
              <p>
                为牦牛司机提供相应服务之必须，您以自愿填写的方式提供注册所需的姓名、性别、电话以及其他类似的个人信息，则表示您已经了解并接受您个人信息的用途，同意牦牛司机为实现该特定目的使用您的个人信息。除此个人信息之外，其他任何您发送或提供给牦牛司机的材料、信息或文本(以下统称信息) 均将被视为非保密和非专有的。牦牛司机对这些信息不承担任何义务。同时如果您提交时没有特别声明的，可视为同意牦牛司机及其授权人可以因商业或非商业的目的复制、透露、分发、合并和以其他方式利用这些信息和所有数据、图像、声音、文本及其他内容。
                您可阅读下面的牦牛司机隐私政策以了解更加详细的内容。
              </p>
            </div>
          </div>
          <div>
            <div className="rule-header fontSize25">责任限制声明</div>
            <div className="rule-content">
              <p>
                不论在何种情况下，牦牛司机对由于信息网络设备维护、信息网络连接故障、智能终端、通
                讯或其他系统的故障、电力故障、罢工、劳动争议、暴乱、起义、骚乱、火灾、洪水、风暴、 爆炸、 战争、政府行为、司法行政机关的命令、 其他不可抗力或第三方的不作为而造成的不能服务或延迟服务不承担责任。
                无论在任何情况下(包括但不限于疏忽原因) ,由于使用牦牛司机上的信息或由牦牛司机平 台链接的信息, 或其他与牦牛司机平台链接的网站信息, 对您或他人所造成任何的损失或损 害(包括直接、间接、特别或后果性的损失或损害,例如收入或利润之损失,智能终端系统之损坏或数据丢失等后果) ,均由使用者自行承担责任(包括但不限于疏忽责任) 。
                牦牛司机所载的信息,包括但不限于文本、图片、数据、观点、网页或链接,虽然力图准确和详尽, 但牦牛司机并不就其所包含的信息和内容的准确、 完整、 充分和可靠性做任何承诺。 牦牛司机表明不对这些信息和内容的错误或遗漏承担责任, 也不对这些信息和内容作出任何明示或默示的、包栝但不限于没有侵犯犯第三方权利、质量和没有智能终端病毒的保证。
              </p>
            </div>
          </div>
          <div>
            <div className="rule-header fontSize25">第三方链接</div>
            <div className="rule-content">
              <p>
                牦牛司机可能保留有第三方网站或网址的链接, 访问这些链接将由用户自己作出决定, 牦牛 出行并不就这些链接上所提供的任何信息、数据、观点、图片、陈述或建议的准确性、完整 性、 充分性和可靠性提供承诺或保证。
                牦牛司机没有审查过任何第三方网站, 对这些网站及其内容不进行控制, 也不负任何责任。 如果您决定访问任何与本站链接的第三方网站, 其可能带来的结果和风险全部由您自己承担。
              </p>
            </div>
          </div>
          <div>
            <div className="rule-header fontSize25">适用法律和管辖权</div>
            <div className="rule-content">
              <p>
                通过访问牦牛司机平台或使用牦牛司机提供的服务, 即表示您同意该访问或服务受中华人民共和国法律的约束, 且您同意受中华人民共和国法院的管辖。
                访问或接受服务过程中发生的争议应当协商解决,协商不成的,各方一致同意至西藏佳斯特信息技术有限公司住所所在地有管辖权的法院诉讼解决。
              </p>
            </div>
          </div>
          <div>
            <div className="rule-header fontSize25">隐私政策</div>
            <div className="rule-content">
              <p>
                牦牛司机非常重视对您的个人隐私保护，我们将按照本隐私政策（以下称“本政策”) 收集、使用、共享和保护您的个人信息。在您使用牦牛司机的产品及服务前，请您仔细阅读并全面了解本政策。如果您是未成年人，您的监护人需要仔细阅读本政策并同意您依照本政策使用我们的产品及服务。对于本政策中与您的权益存在重大关系的条款，我们已将字体加粗以提示您注意。当您浏览、访问牦牛司机平台及/或使用牦牛司机的任一产品或服务时，即表示您已经同意我们按照本政策来收集、使用、共享和保护您的个人信息。
                我们收集、使用、共享和保护您的个人信息，是在遵守国家法律法规规定的前提下，出于向您提供牦牛司机的产品及服务并不断提升产品及服务质量的目的，包括但不限于支持我们开展牦牛司机产品及服务相关的市场活动、完善现有产品及服务功能、开发新产品或新服务。
                <div className="infocollect">信息的收集范围</div>
                <p>您授权我们收集您的以下个人信息:</p>
                1、身份识别信息，包括但不限于您的姓名、身份证明、联系地址、电话号码、生物特征信息；<br/>
                2、对于司机类用户，除身份识别信息以外，我们还会收集您的公司、车辆、行驶证、驾驶证以及监督卡信息；<br/>
                3、您所处的地理位置及目的地信息；<br/>
                4、平台操作信息，包括但不限于您的IP 地址、设备型号、设备标识符、操作系统版本信息；<br/>
                5、行程信息，包括但不限于您的出发地、到达地、路线、途经地点及里程数信息；<br/>
                6、支付信息，包括但不限于您的支付时间、支付金额、支付工具、银行账户及支付账户信息；<br/>
                7、个人信用信息，包括但不限于关于您的任何信用状况、信用分、信用报告信息；<br/>
                其他根据我们具体产品及服务的需要而收集的您的个人信息，包括但不限于您对我们及我们的产品或服务的意见、 建议、 您曾经使用或经常使用的移动应用软件以及使用场景和使用习惯等信息。
                <div className="infocollect">信息的收集方法</div>
                <p>您授权我们通过以下方法收集您的个人信息:</p>
                1、我们将收集和储存在您浏览、访问牦牛司机平台及/或使用牦牛司机的产品或服务时主动向我们提供的信息:<br/>
                2、我们将收集和储存我们在向您提供牦牛司机的产品或服务的过程中记录的与您有关的信息;<br/>
                3、我们将收集和储存您通过我们的客服人员及/或其他渠道主动提交或反馈的信息;<br/>
                4、我们将向关联公司、商业合作伙伴及第三方独立资料来源,收集和储存其合法获得的与您有关的信息;<br/>
                5、我们将向依法设立的征信机构査询您的相关信用信息, 包括但不限于任何信用分、信用报告等。
                <div className="infocollect">信息的用途</div>
                <p>您授权我们出于以下用途使用您的个人信息:</p>
                1、向您提供牦牛司机的产品及服务,并进行牦牛司机相关网站及APP的管理和优化;<br/>
                2、提升和改善牦牛司机现有产品及服务的功能和质量, 包括但不限于产品及服务内容的个性化定制及更新;<br/>
                3、开展牦牛司机产品及服务相关的市场活动,向您推送最新的市场活动信息及优惠方案; 设计、开发、推广全新的产品及服务;<br/>
                4、提高牦牛司机产品及服务安全性, 包括但不限于身份验证、客户服务、安全防范、诈骗监测、存档和备份;<br/>
                5、协助行政机关、司法机构等有权机关开展调査, 并遵守适用法律法规及其他向有权机关承诺之义务;<br/>
                6、在收集信息之时所通知您的用途以及与上述任何用途有关的其他用途;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;此外,我们可能向您发送与上述用途有关的信息和通知,包括但不限于为保证服务完成所必 须的验证码、使用产品或服务时所必要的推送通知、当前用车费用优惠及减免信息、关于牦牛司机产品或服务的新闻以及市场活动及优惠促销信息。
                <div className="infocollect">信息的共享</div>
                <p>我们对您的个人信息承担保密义务,但您授权我们在下列情况下将您的信息与第三方共享:</p>
                1、为了提升我们的产品及服务质量或向您提供全新的产品及服务, 我们会在关联公司内部共享您的相关信息,也可能将我们收集的信息提供给第三方用于分析和统计;<br/>
                2、如果您通过牦牛司机平台使用的某些产品及服务是由我们的合作伙伴提供的,或是由我们与 合作伙伴或供应商共同提供的,我们将与其共享向您提供相应产品及服务所必需的信息;<br/>
                3、为了与第三方开展联合推广活动, 我们可能与其共享开展活动所必需的以及在活动过程中产生的相关信息;<br/>
                4、为了维护您的合法权益, 在协助处理与您有关的交易纠纷或争议时, 我们会向您的交易相对 方或存在利害关系的第三方提供解决交易纠纷或争议所必需的信息;<br/>
                5、根据法律法规的规定及商业惯例,我们需要接受第三方的审计或尽职调査时, 可能向其提供 您的相关信息;<br/>
                6、根据法律法规的规定或行政机关、司法机构等有权机关要求, 我们会向其提供您的相关信息; <br/>
                7、其他经您同意或授权可以向第三方提供您的个人信息的情况。
              </p>
            </div>
          </div>
          <div>
            <div className="rule-header fontSize25">信息的安全及保护措施</div>
            <div className="rule-content">
              <p>
                我们及我们的关联公司将采用严格的安全制度以及行业通行的安全技术和程序来确保您的 个人信息不被丢失、泄露、毀损或滥用。我们的员工及服务外包人员将受到保密协议的约束, 同时还将受到数据信息的权限控制和操作监控。
                请您注意,任何安全系统都存在可能的及未知的风险。 </p>
              <p>
                您的交易相对方、您访问的第三方网站经营者、您使用的第三方服务提供者和通过我们获取 您的个人信息的第三方可能有自己的隐私权保护政策以及获取您个人信息的方法和措施, 这些第三方的隐私权保护政策、获取个人信息的方法和措施将不会受到我们的控制。虽然我们将与可能接触到您的个人信息的我们的合作方及供应商等第三方签署保密协议并尽合理的努力督促其履行保密义务, 但我们无法保证第三方一定会按照我们的要求采取保密措施, 我们亦不对第三方的行为及后果承担任何责任。
                作为用户,您可根据您的意愿决定是否使用牦牛司机平台的服务,是否主动提供个人信息。 同时,您可以查看您提供给我们的个人信息及行程信息。如果您希望删除或更正您的个人信 息,请联系我们的客服人员。
                如果我们监测到您将牦牛司机的产品及服务以及相关信息用于欺诈或非法目的，我们将会采取相应措施，包括但不限于中止或终止向您提供任何产品或服务。
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AccordionExample;