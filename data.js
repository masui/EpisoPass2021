//
//
//

let 回答リスト = [
    '東京', '大阪', '京都', '鎌倉', '名古屋', '大宮',
    '北海道', '福島', '福岡', '熊本', '沖縄'
]
let 問題リスト = [
    '公園でコケたのは?',
    '床屋の世話になったのは',
    'メガネをなくしたのは?',
    'ミサホちゃんの出身は?'
]

const 県名リスト = [
    '北海道',
    '青森', '岩手', '宮城', '秋田', '山形', '福島','茨城',
    '栃木', '群馬', '埼玉', '千葉', '東京', '神奈川',
    '新潟', '富山', '石川', '福井',
    '山梨', '長野', '岐阜', '静岡', '愛知','三重',
    '滋賀', '京都', '大阪', '兵庫', '奈良','和歌山',
    '鳥取', '島根', '岡山', '広島','山口',
    '徳島', '香川', '愛媛', '高知',
    '福岡', '佐賀', '長崎', '熊本', '大分', '宮崎','鹿児島',
    '沖縄'
]
const 都市名リスト = [
    '横浜', '大阪', '名古屋', '札幌', '福岡', '川崎', '神戸', 
    '京都', 'さいたま', '広島', '仙台', '千葉', '北九州', 
    '堺', '浜松', '新潟', '熊本', '相模原', '岡山', '静岡', '船橋', 
    '川口', '鹿児島', '八王子', '姫路', '宇都宮', '松山', 
    '松戸', '市川', '東大阪', '西宮', '大分', '倉敷', '金沢', 
    '福山', '尼崎', '藤沢', '町田', '柏', '豊田', '高松', '富山', 
    '長崎', '岐阜', '豊中', '宮崎', '枚方', '横須賀', '吹田', 
    '岡崎', '一宮', '長野', '高崎', '豊橋', '和歌山', '奈良', 
    '川越', '高槻', '大津', '所沢', '越谷', 'いわき', '前橋', 
    '旭川', '郡山', '高知', '那覇', '春日井', '秋田', '四日市', 
    '明石', '久留米', '盛岡', '茨木', '福島', '青森', '津', '水戸', 
    '市原', '長岡', '八尾', '府中', '福井', '加古川', '平塚', 
    '下関', '徳島', '函館', '草加', '山形', '富士', '佐世保', 
    '調布', '茅ヶ崎', 'つくば', '松本', '大和', '佐賀', '春日部', 
    '寝屋川', '上尾', '宝塚', '厚木', '八戸', '太田', '呉', '伊勢崎', 
    '西東京', '松江', '流山', '八千代', '小平', '伊丹', '東広島', 
    '鈴鹿', '三鷹', '熊谷', '山口', '岸和田', '日野', '甲府', 
    '沼津', '小田原', '鳥取', '安城', '上越', '立川', '豊川', 
    '和泉', '宇治', '習志野', '日立', '出雲', '鎌倉', '浦安', 
    '苫小牧', '西尾', '佐倉', '弘前', '小山', '磐田', '帯広', 
    '高岡', '新座', '釧路', '宇部', '秦野', '都城', '松阪', '大垣', 
    'ひたちなか', '栃木', '上田', '刈谷', '野田', '川西', 
    '東村山', '今治', '久喜', '武蔵野', '小牧', '狭山', '米子', 
    '多摩', '入間', '足利', '各務原', '草津', '守口', '沖縄', 
    '三郷', '土浦', '藤枝', '深谷', '朝霞', '戸田', '石巻', '古河', 
    '桑名', '周南', '箕面', '焼津', '海老名', '木更津', '稲沢', 
    '諫早', '青梅', '成田', '座間', '尾道', '我孫子', '国分寺', 
    '岩国', '富士宮', '瀬戸', '大崎', '飯塚', '小金井', 'うるま', 
    '霧島', '八代', '伊勢', '鶴岡', '江別', '橿原', '門真', '大東', 
    '延岡', '半田', '松原', '会津若松', '唐津', '生駒', '鴻巣', 
    '佐野', '新居浜', '浦添', '北見', '別府', '那須塩原', 
    '東久留米', '掛川', '廿日市', '昭島', '防府', '東海', 
    '長浜', '彦根', 'ふじみ野', '奥州', '東近江', '一関', 
    '富士見', '加須', '小樽', '大牟田', '春日', '白山', '鎌ケ谷', 
    '丸亀', '三田', '羽曳野', '富田林', '三島', '多治見', 
    '桐生', '小松', '池田', '西条', '取手', '筑紫野', '印西', 
    '大野城', '伊勢原', '河内長野', '鹿屋', '筑西', '酒田', 
    '坂戸', '宜野湾', '泉佐野', '可児', '津山', '糸島', '佐久', 
    '江南', '飯田', '千歳', '宗像', '島田', '神栖', '大村', '新発田', 
    '三条', '安曇野', '鹿沼', '芦屋', '四街道', '八潮', '花巻', 
    '稲城', '大府', '北上', '薩摩川内', '東松山', '日進', 
    '射水', '三原', '伊賀', '坂井', '甲賀', '袋井', '高砂', '摂津', 
    '茂原', '御殿場', '北名古屋', '亀岡', 'あま', '横手', 
    '関', '狛江', '牛久', '高山', '貝塚', '知多', '和光', '綾瀬', 
    '東大和', '大和郡山', '守山', '尾張旭', '中津'
]
const 町名リスト = [
    '本郷', '大町', '本町', '岡田町',
    '相生町', '青木町', '鳴尾町', '芦原町', '愛宕山', '荒戎町', '池田町',
    '池開町', '石在町', '石刎町', '泉町', '一里山町', '今津町','上ケ原',
    '枝川町'
]
const 問題例リスト = [
    '深尾さんの実家は?',
    '高校の頃超美味かった店は?',
    '鈴木の家から峠を越えると?',
    '布施君の出身は?',
    '義父の出身は?',
    '義父の大学は?',
    '義母の生まれは?',
    '廃虚がすごかったのは?',
    '高見君の親戚の家は?',
    '猫又といえば?',
    'コケた公園は?',
    'ライブハウスが閉まってたのは?',
    '夜中に雀荘を発見したのは?',
    '盆は帰省しろと怒られたのは?',
    '特急が止まって歩いたのは?',
    '電波が通じなくて苦労したのは?',
    '額を怪我したのは?',
    '前田君と偶然会ったのは?',
    '駐車違反でつかまったのは?',
    'スピード違反でつかまったのは?',
    '眼鏡をなくしたのは?',
    '軽トラで走ったのは?',
    'メトロノームは?',
    '商店街でギターを売ってるのは?',
    '短い板でスキーしたのは?',
    '山中でひたすら迷ったのは?',
    '川で石を投げたのは?',
    'ゲンセンカンぽいのは?',
    '川で流されたのは?',
    'アルゼンチン人と飲んだのは?',
    '右足を怪我したのは?',
    '床屋でトイレを借りたのは?',
    'アバラが折れたのは?',
    '営業時間終了で入れなかったのは?',
    'のんちゃんと会ったのは?',
    'マリアと行った旅館は?',
    '水田君と再会したのは?',
    '居眠りして追突したのは?',
    '電源使わせてもらえなかったのは?',
    '伯父が住んでたのは?',
    '祖母の出身は?',
    'ワイングラスを割ったのは?',
    'ベッドの足が折れたのは?',
    '店のベランダを踏み抜いたのは?',
    '宿のベランダを踏み抜いたのは?',
    '裸のオッサンが店に入るのは?',
    '段ボールを買うのは?',
    '宴会で湯が出るのは?',
    '謎の肉屋は?',
    '泡が湯船に入る風呂は?',
    'ギターを弾いて怒られたのは?',
    'コケて小指を怪我したのは?',
    'GoogleMapsに騙されたのは?',
    '親戚のペンションは?',
    'ビフテキをおかわりしたのは?',
    '針金作ってるのは?',
    '包丁売ってたのは?',
    'コヅエの家は?',
    '旋盤屋は?',
    'バイト屋は?',
    '転んで指に土が入ったのは?',
    'CatsEyeを見たのは?',
    '宴会で仲間はずれにされたのは?',
    'デカい蚊がいたのは?',
    '意外とカツカレーが美味かったのは?',
    '野犬に驚いたのは?',
    'ジャンプ肉を売ってたのは?',
    '本棚見て怒られたのは?',
    '足の踏み場がない研究室は?',
    'ヨーコが住んでるのは?',
    '泊めてもらえなかったのは?',
    'イカサマ麻雀を疑われたのは?',
    '友達の従姉妹が美人だったのは?',
    '吉田君をハブった奴の出身は?',
    'バイクに灰が積もってたのは?',
    '朝日ソノラマをみつけたのは?',
    '宿の食事が絶望的だったのは?',
    'タイル屋は?',
    'アランケイがいたのは?',
    '風呂で泳いだのは?',
    '夜の猿が怖いのは?',
    '静御前に会ったのは?',
    '自転車が宙返りしたのは?',
    'デカい石が割れてるのは?',
    '弓を引いたのは?',
    'ウナギが意外だったのは?',
    'ムヒョーてなるのは?',
    '潮干狩りに行ったのは?',
    '電車のアナウンスがわからないのは?',
    'ミサホちゃんはどこ出身?',
    '拾った財布の持ち主は?',
    '財布を拾うのは?',
    'スピード違反したのは?',
    '自転車借りて学会行ったのは?',
    '低い山なのに疲れたのは?',
    'ワークステーションがあるのは?',
    '酷い雷に遭遇した公園は?',
    '社長がトランペット吹くのは?',
    'アナログオシロが好きなのは?',
    'サバ味噌が生だったのは?',
    '石投げたらトンボに当たったのは?',
    'ラーメンを食べきれなかったのは?',
    'バスのために必死で走ったのは?',
    '牡蠣であたったのは?',
    '鯉に石投げてバチがあたったのは?',
    '実は関西なのは?',
    'Y氏が踊るのは?',
    'ヒカルの出身は?',
    'オオバが立候補したのは?',
    '洋菓子屋でオナラするのは?',
    'M君がバイクで行く蕎麦屋は?',
    'デカいナメクジがいたのは?',
    '海沿いの道が酷いのは?',
    '警察に作文されたのは?',
    '無免許運転でつかまったのは?',
    'ツキヨタケを見たのは?',
    'シャクルトンかと思ったのは?',
    'バイクで行った海は?',
    '痴漢されたのは?',
    'チェロ弾く親戚は?',
    'スケート場の親戚は?',
    '2段ベッドから滑り落ちたのは?',
    '朝からおにぎり作ったのは?',
    '麻雀させられたのは?',
    'エレベータの段差が怖いのは?',
    'VAXが落ちてるのは?',
    '床屋と飲んだのは?',
    '床の間に小便するのは?',
    '土左衛門は?',
    '屋根が吹き飛ぶのは?',
    '不動産屋に意図がバレたのは?',
    '超美味しいケーキ屋は?',
    '峠を超えると雪国だったのは?',
    'ガラスの家は?',
    'けろっぴバッグ持って走ったのは?',
    '廃校の宿は?',
    '結婚式をすっぽかしたのは?',
    '落ちた岩の下じきになるのは?',
    '寺田君が足を折ったのは?',
    '魚がステーキみたいだったのは?',
    '輪ゴムの作り方を勉強したのは?',
    'ワインが不味かったのは?',
    '雨の中を登山したのは?',
    '雨で登山を断念したのは?',
    '軽石みたいなのを拾ったのは?',
    '黒曜石を拾ったのは?',
    '何も釣れなかったのは?',
    '女性がみんな美人に見えたのは?',
    '空缶を捨てられなくて困ったのは?',
    'TV屋に因縁つけられたのは?',
    '鈴木の研究所は?',
    '鈴木がHするのは?',
    '小林がHするのは?',
    '三浦の職場は?',
    '水田の職場は?',
    'BBQが超寒いのは?',
    'S君がネカフェに泊まるのは?',
    '旅行をキャンセルしたのは?',
    '山中で酷いものを発見したのは?',
    '肝試しするのは?',
    '花火見てたら雨に降られたのは?',
    '峠でエンコしたのは?',
    'ハチコの出身は?',
    'コーヨの出身は?',
    'はなまるしか開いてないのは?',
    'キャッチが酷いのは?',
    'カロロイニは?',
    'ヤナギの出身は?',
    'ミス君が悪酔いするのは?',
    'トランペットを習うのは?',
    'ハタノ先生の出身は?',
    '従兄弟のペンションは?',
    'タケノコを掘ったのは?',
    'ベンツが4台並んでるのは?',
    'K教授が家を新築したのは?',
    '新しく西口ができたのは?',
    '臭い湖は?',
    'タコがいたのは?',
    '終電がヤバいのは?',
    'ひとり焼肉が悲しいのは?',
    '風呂がヌルいのは?',
    '記念スプーンもらったのは?',
    '線路に侵入したのは?',
    '松沢氏の職場は',
    'ヒロシの家は?',
    'イビちゃんの家は?',
    'サナエの家は?',
    'マサコの家は?',
    '無限タコヤキしたのは?',
    '川で綱引きしたのは?',
    '山頂で小便したのは?',
    '稜線が恐かったのは?',
    'ヘビの坂とは?',
    '地蔵の坂とは?',
    '日銀の坂とは?',
    'ナショナル坊やが立ってたのは?',
    'Google道案内に騙されたのは?',
    'ポルシェに乗ったのは?',
    '旅行に行きそこねたのは?',
    '金網を楽々飛び越すのは?',
    '股が痛くて歩けなくなったのは?',
    '訪問が最後なのは?',
    '麻雀で負けて逃げたのは?',
    '滝壺に落ちるのは?',
    '吊橋が怖いのは?',
    '冷蔵庫の酒を勝手に飲んだのは?',
    '鉄橋を歩いて渡るのは?',
    '高橋徹氏の家は?',
    'デルタとは?',
    'Delta Vistaとは?',
    'スーパーでライブしたのは?',
    'ドリトル先生の本を借りたのは?',
    '超寒いキャンプ/BBQは?',
    'フジナガの出身は?',
    '蔵といえば?',
    '牡蠣にあたったのは?',
    '渋柿を食べたのは?',
    'アミガサタケは?',
    '転んで親指に土が入るのは?',
    '松沢氏が移住したのは?',
    'カンちゃんが移住したのは?',
    '誰もがコケる階段があったのは?',
    '帯広ナンバーを追及されたのは?',
    '鬼瓦な人の出身は?',
    '食い逃げに遭遇したのは?',
    '溺れかけたのは?',
    '救急車に乗ったのは?',
    'カキにあたったのは?',
    '臭くて驚いたのは?',
    '居酒屋のオヤジに因縁つけられたのは?'
]

