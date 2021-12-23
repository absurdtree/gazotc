export default {
  // 英文版 ***************************************************
  en: {
    message: {
      lang: 'LANG',
      lang1: 'EN',
      lang2: '中文',
      navRoutes: [
        { title: 'Home page', route: '/Homepage' },
        { title: 'Core mechanism', route: '/Coremechanism' },
        { title: 'Security rules', route: '/Securityrules' },
        { title: 'Transaction rules', route: '/Transactionrules' },
        { title: 'Arbitration rules', route: '/Arbitrationrules' },
        { title: 'DAPP', route: '/Exchange' },
        { title: 'Public sale', route: '/Activities' },
      ],
	  unknown: 'unknown',
	  set: 'set up',
	  setPas: 'Set password',
	  enterPas: 'Please input a password',
	  enterPasAggin: 'Please enter the password again',
	  ConfirmPassword: 'Confirm password',
	  pasTips: "*Please set more than 8 characters, including at least alphanumeric characters. Please back up your password and forget it. It can't be retrieved",
	  DataSucceeded: 'Data modification succeeded!',
	  Datafailed: 'Data modification failed!',
	  Modifying: 'Modifying',
	  personalInformation: 'personal information',
	  essentialInformation: 'essential information',
	  NoData: 'No Data',
	  menu: 'Menu',
	  changeInto: 'change into',
	  changeOut: 'Transfer out',
	  available: 'available',
	  Recharge: 'Recharge',
	  WithdrawMoney: 'Withdraw money',
	  ChargeMoney: 'Charge money',
	  decrypt: 'decrypt',
      sumbmit: 'sumbmit',
      operation: 'operation',
      state: 'state',
      notFill: 'Temporarily did not fill in',
	  contactDes: 'View contact information',
      other: 'other',
      details: 'details',
	  loadMore: 'loadMore',
	  cancel: 'cancel',
      WhitePaper: 'WhitePaper',
	  phoneNumber: 'phone',
	  email: 'email',
	  WeChat: 'WeChat',
	  remarks: 'Transaction notes',
	  editremarks: 'Modify comments',
	  complete: 'complete',
	  prompt:'prompt',
	  success: 'Data modification succeeded!',
	  failed: 'Data modification failed!',
	  orderStateNow: 'Current transaction status',
	  enterContent: 'Please enter the content',
	  enterOrderId: 'Please enter the order number',
	  enterUnitPrice: 'Please enter unit price',
	  enterAmount: 'Please enter quantity',
	  enterMinNum: 'Please enter the minimum quantity',
	  enterMaxNum: 'Please enter the maximum number',
	  enterMargin: 'Please enter the deposit',
	  MinNumEmpty: 'Minimum quantity cannot be empty',
	  MaxNumEmpty: 'Maximum quantity cannot be empty',
	  enterBalanTips: '* The margin balance is insufficient, but it can still be published',
	  contEmpty: 'Cannot be empty',
	  rechargeTips: '* You need to recharge before publishing a sales order!',
	  rechargeTips1: 'please reduce the quantity or recharge!',
	  exceedTips: '* This quantity cannot exceed',
	  currencyIssueOrder: 'Currency OTC release order',
	  all: 'all',
	  suspendBalad: 'Suspension of release of margin',
	  UserPause: 'User pause',
	  MerchantSuspension: 'Merchant suspension',
	  earlyReleaseMargin :'Early release of margin',
	  UserAgreesRelease: 'User agrees to release',
	  MerchantAgreesRelease: 'Merchant agrees to release',
	  allAgrees:'Both parties agree to release',
	  ReleaseMargin:'Release margin',
	  appeal: 'appeal',
	  putMoney: 'Put money',
	  pushMarginRelease: 'Suspension of release of margin',
	  OnTheShelf: 'On the shelf',
	  OffTheShelf:'Off the shelf',
	  modify: 'modify',
	  NotMinNum:'Not less than the minimum quantity',
	  NotMaxNum: 'Cannot be greater than the maximum quantity',
	  assetRchargeTips: 'Insufficient asset balance, please recharge first!',
	  enterPrivateTips:'Please enter your private password',
	  SelectType: 'Please select the modification type',
	  NotcannotMinNum: 'The minimum quantity cannot be greater than the total',
	  NotcannotManNum: 'The maximum quantity cannot be greater than the total',
	  NotCannotDesposit: 'User deposit cannot be greater than 100%',
	  MarginLowTips: 'This order can be released, but the margin balance is too low and may not be traded. Please supplement the margin in time!',
	  SupMargin: 'Supplementary margin',
	  AssetsLock: 'Assets in lockup (gaz)',
	  AssetsWith: 'Withdrawable assets (gaz)',
	  AssetsRelease: 'Disposable releasable assets (gaz)',
	  Withdrawal: 'Withdrawal',
	  return:'return',
	  publicKey: 'Private public key',
	  keyp: 'Public key',
	  arbitration:{
		  invitetion: 'Invitation of arbitrators',
		  apply: 'Application for arbitrator',
		  exit: 'Withdrawal of arbitrator',
		  
		  enterAmount: 'Please enter the amount',
		  enterOrderNum: 'Please enter the order number',
		  arbitratorNick: 'Nickname of arbitrator',
		  userMarginLock: 'User locked security fund',
		  applyArbitration: 'Application for arbitrator',
		  exitArbitration: 'Withdrawal of arbitrator',
		  serial: 'Serial number',
		  arbitrator: 'the arbitrator',
		  inviteNumber: 'Invite the number',
		  singular: 'The singular',
		  regNumber: 'Number of second round applications',
		  balance: 'Margin balance',
		  normal: 'normal',
		  frozen: 'frozen',
		  frozenState: 'frozen state',
		  AccountNum: 'account',
		  account: 'My account',
		  nickname: 'My nickname',
		  NoNickname: 'No nickname',
		  order: 'Order number',
		  character: 'My role',
		  cost: 'I paid the arbitration fee',
		  mark: 'Arbitration mark',
		  invite: 'The invitation',
		  invited: 'Arbitrators invited',
		  assets: 'assets',
		  margin: 'margin',
		  marginBalance: 'Merchant margin balance',
		  payMar1: 'Proportion of deposit required by merchants to be paid by users',
		  orderNum: 'The number of my complaint order',
		  invitedNum: 'The number of orders I was invited to',
		  successNum: 'I successfully arbitrated the order',
		  payBalance: 'Payment of guarantee amount',
		  Serial: 'Arbitrator number',
		  partOrderNum: 'I participated in the second round of arbitration order order number',
		  marginBalan: 'Margin balance',
		  withdrawalAmount: 'Withdrawal amount',
		  fromOrder: 'From release order',
		  orderId: 'orderId',
		  merchant: 'merchant',
		  user: 'user',
		  assets: 'Number of assets',
		  assetsNum: 'Number of assets',
		  merchantMargin: 'Merchant margin',
		  merchantMarginLock: 'Guarantee fund locked by merchants',
		  userMargin: "Subscriber's margin",
		  appealType: 'The appeal type',
		  arbitrationResult: 'The results of arbitration',
		  arbitrationState: 'State of the arbitration',
		  countdown: 'countdown',
		  balandCountdown: 'Margin countdown',
		  ab_coutdown: 'Arbitration countdown',
		  assets: 'assets',
		  
		  NotStart: 'Not started',
		  hasEend: 'Has ended',
		  nextArbitration: 'Enter the second round of arbitration',
		  MerchantsVictory: 'Merchants victory',
		  userVictory: 'User victory',
		  arbitrationing: 'In the arbitration',
		  executed: 'executed',
		  arbitrationEnd: 'End of the arbitration',
		  dogfall: 'dogfall',
		  orderDes: 'order details',
		  merchantAdress: 'Business address',
		  userAress: 'Address of the user',
		  beInvited: 'Be invited',
		  M_arbitrator: 'Merchant arbitrator',
		  U_arbitrator: 'User arbitrator',
		  favor: 'favor',
		  implement: 'implement',
		  signing: 'Registration in progress',
		  singUp: 'sign up',
		  voteing: 'In voting',
		  waiting: 'Execution waiting',
		  singUpState: 'Check Enrollment Status',
		  OnearbitrationResult: 'Results of the first round of arbitration',
		  OnearbitrationState: 'Status of the first round of arbitration',
		  TwoarbitrationState: 'Second round arbitration status',
		  
		  
		  
		  myPartTitle: 'The first round of arbitration I participated in',
		  myPartOrderTitle: 'I participated in the order',
		  myPartOrderSuccssTitle: 'I successfully arbitrated the order',
		  
	  },
      activit: {
        tips: 'Please install the metamask plug-in or refresh the page first',
        title: '+Arbitration',
        addr: 'address',
        copyURL: 'copyURL',
        share: 'Share this link with your friends!',
        nickname: 'nickname',
        unregistered: 'unregistered',
        name: 'name',
        IDnumber: 'ID number',
        First: "First round airdrop",
        reg: 'registered airdrop',
        Airdroprules: 'Airdrop rules',

        BeIssued: 'To be issued',
        Issued: 'Issued',
        AirdropReward: 'Airdrop reward',
        ShareRewards: 'Share rewards',
        QuickReg: 'One click registration',
        GetPoints: 'Get points',
        Received: 'Received',
        Receiving: 'Receiving......',
        authName: 'Real name authentication',
        notOpen: 'Not open',
        AirDis: 'Airdrop distribution',
        image: '@/assets/banner1.jpg',
        UseUSDT: 'Available usdt',
        enterQuant: 'Please enter quantity',
        exchange: 'exchange',
        exchangeRecord: 'Exchange record',
        SerialNumbe: 'Serial number',
        usdt: 'Unit price (usdt)',
        gaz: "Quantity (gaz)",
        date: 'date',
        CommissionRecord: 'Commission return record',
        RecommendedAddress: 'Recommended address',
        LockQuantity: 'Lock quantity',
        PrimaryRelease: 'Primary release',
        extract: 'extract',
        LinearRelease: 'Linear release',
        ExtractableQuantity: 'Extractable quantity',
        publicDes: 'Public sale description',
        1: '1. The unit price for public sale is 0.5 usdt;',
        2: '2. Authorization is required for the first exchange. The authorized amount is 100 times of the exchange amount. There is no need to authorize the next exchange within the limit;',
        3: '3. After successful exchange, 10% of gaz will be transferred to the one-time release wallet and released uniformly after the public test. 90% of them enter the lock contract and are released in 180 minutes after mining is started.',
        4: '4. The recommender receives 10% usdt Commission unconditionally; If the recommender has more than 9000 gaz locked wallets, he can get an additional 10% gaz Commission, and the gaz is uniformly locked and released.',
        5: 'Description of the first round of airdrop (registered airdrop)',
        51: '1. OTC transaction requires real name authentication, and identity information needs to be registered before transaction;',
        52: '2. All information is registered in the smart contract, and sensitive information is encrypted and stored;',
        53: '3. A valid identity information can only be received once by airdrop;',
        54: '4. After successful registration, the registrant will automatically get 20 points and the recommender will get 10 points;',
        55: '5. After the registrant passes the real name certification, he can exchange 1:1 points for gaz;',
        56: '6. The points obtained by the recommender can be converted into gaz only after the real name certification of the registrant is passed;',
        57: '7. The total amount of registered airdrops is 630000 until they are collected;',
        58: '8. All airdrops are released by 180 antennas after mining is started.',
        61: 'The above information is stored in the smart contract, * is public information and * * is non-public information',
        62: 'Name and ID number should be consistent with those stored in smart contracts.',
        authentication: 'authentication',
        register: 'register',
        IncompleteParameters: 'Incomplete parameters',
        partSale: 'Participate in pre-sale',
        630: 'Global public offering of 6.3 million',
        followWeb: 'Pay attention to the official',
        save5: 'Additional 5 gaz',
        enterNick: 'Please enter a nickname',
        enterName: 'Please enter your name',
        enterIdCard: 'Please enter your ID number.',
      },
      dapp: {
		payTime: 'Payment time',
		orderSuspended: 'The order has been suspended',
		orederCancelled:'The order has been cancelled',
		PrivateMessage: 'Private message',
		message: 'information',
		orderTime: 'Order time',
		notReleased: 'not released',
		released: 'released',
		nick: 'nick',
		fristOrder: 'First round arbitration order',
		secondOrder: 'Second round arbitration order',
		type: 'type',
		orderType: 'Order Type',
		assetsType: 'Asset types',
		transactionNum: 'Number of transactions',
		amount: 'amount',
		minAmount: 'Minimum quantity',
		maxAmount: 'Maximum quantity',
		limit: 'limit',
		unitPrice: 'Unit Price ',
		MarginRatio: 'Margin Ratio',
		orderStatus: 'Order Status',
		ReceivingOrder: 'Receiving orders',
		Resting: 'Resting',
		ModifyPrice: 'Modify unit price',
		ModifyType: 'Modification type',
		ModifiedQuantity: 'Modified quantity',
		ModifyOrderStatus: 'Modify order status',
		preiceDes: 'If the unit price is 0, it means that both parties agree!',
		forSale: 'for sale',
		assetRelease: 'Asset release',
		marginRelease: 'Release of margin',
		privateLetter: 'Direct messages',
		DMSInformation: 'DMS information',
		explain: 'explain',
		Unit: 'Unit',
		pay: 'payment',
        website: 'Official website',
        coinNet: 'conin Net',
        HecoNet: 'Heco main network',
        EthereumRinkeby: 'Ethereum rinkeby',
        EthereumNet: 'Ethereum main network',
        WaveNet: 'Wave field main network',
        CurrencyOTC: 'French currency OTC',
        CoinOTC: 'Currency OTC',

        sell: 'sell',
        buy: 'buy',
        currency: 'currency',
        unit: 'unit',
		received: 'received',
		getCurrency: 'The legal currency you will pay or receive',
		mortgageDes: 'The deposit you will mortgage',

        Merchant: 'Merchant',
		blandAsk: 'margin requirements',

        tradeList: 'Transaction list',
        ReleaseOrder: 'Release order',

        wallet: 'wallet',
        rule: 'rule',
        OrderCenter: 'Order center',
        PersonalCenter: 'Personal Center',
        Arbitration: 'Arbitration',

        legalWallet: 'Legal Coin Wallet',
        CoinWallet: 'Coin Wallet',
        LockWallet: 'Lock Wallet',
        capitalAsset: 'Net capital assets',

        legalIssue: 'Legal currency release',
        LegalTransaction: 'Legal currency transaction',
        CurrencyIssue: 'Currency release',
        CurrencyTransaction: 'Currency transaction',

        arbitratorsLister: 'panel of arbitrators',
        ArbitrationList: 'Arbitration List',
        firstOrders: 'first orders',
        myPart: 'My partake',
		myOrder: 'I appeal the order',
		succeedOrderL: 'I successfully arbitrated the order',


        TransactionRules: 'Transaction rules',
        MarginRules: 'Margin rules',
        ArbitratorsRules: 'Rules of Arbitrators',



        transactionRules1: '1. Traders can recharge any asset to the smart contract, but only the assets approved by community governance can issue orders',
        transactionRules2: '2. Except that the assets and deposits in the transaction are frozen and cannot be withdrawn, other assets can be withdrawn freely',
        transactionRules3: '3. When a merchant issues an order, it does not need a deposit, but the deposit balance is insufficient, and the user may fail to take the order',
        transactionRules4: '4. The deposit freezing ratio of merchants is 20%, which can be modified according to community governance in the later stage',
        transactionRules5: '5. The deposit proportion frozen by the user is set by the merchant',
        transactionRules6: '6. When a merchant issues a purchase order, it does not need to recharge the assets first',
        transactionRules7: '7. When a merchant issues a sales order, it needs to recharge first and freeze the corresponding amount of assets',
        transactionRules8: '8. The merchant can modify the transaction quantity and unit price in the order',
        transactionRules9: '9. Assets and margin can only be transferred between the two parties to the transaction',
        transactionRules10: '10. Cancellation can only be triggered by the payer, and there is no service charge for cancellation contract',
        transactionRules11: '11. Currency release can only be triggered by the payee, and the service charge will be deducted from the contract during currency release',
        transactionRules12: '12. If the payer fails to pay or the seller fails to release money, it may apply for arbitration',
        transactionRules13: '13. The deposit shall be released three days after the currency is released, and both parties can release it in advance by agreement',
        transactionRules14: '14. Before the deposit is released, either party can trigger the suspension of release',
        transactionRules15: '15. In order to prevent malicious suspension, the deposit needs to be more than 10% when the user triggers the suspension',
        transactionRules16: '16. If the funds of the payee are frozen, both parties can negotiate the compensation proportion of the deposit. If no agreement can be reached, they can apply for arbitration',



        marginRules1: 'In the first stage, the mainstream stable currency is used for the transaction margin and the platform currency gaz is used for the arbitration margin;',
        marginRules2: 'Ethereum and wave field use usdt as security deposit, and Huo coin ecological chain uses husd as security deposit;',
        marginRules3: 'deposit needs to be recharged before transfer; ',
        marginRules4: 'deposit will be automatically frozen when taking orders; ',
        marginRules5: 'insufficient available margin balance of either party will lead to failure of order taking;',


        QualificationArbitrators: 'Qualification of Arbitrators',
        firstRules: 'First round arbitration rules',
        twoRules: 'Second round arbitration rules',


        rulesOfArbitratorsOne1: '1. The arbitrator needs to sign up first and pledge the deposit not lower than the minimum requirement of the system to the contract;',
        rulesOfArbitratorsOne2: '2. After successful registration, the contract will return a number in order. Only the first n digits can participate in arbitration;',
        rulesOfArbitratorsOne3: '3. Deposit cannot be added. One address can only have one number at the same time;',
        rulesOfArbitratorsOne4: '4. Participate in the Arbitration Commission to release part of the deposit, and the deposit can also be withdrawn;',
        rulesOfArbitratorsOne5: '5. Participate in the second round of arbitration and temporarily freeze the deposit until the end of arbitration;',
        rulesOfArbitratorsOne6: '6. After the deposit is lower than the minimum requirement, the system will withdraw the address number;',
        rulesOfArbitratorsOne7: '7. The vacancy number is filled by the nth address after the number;',
        rulesOfArbitratorsOne8: '8. If the corresponding address after n bits is empty, it will be filled by the last address;',
        rulesOfArbitratorsOne9: '9. If an arbitrator does evil, the community can propose to remove the arbitrator',




        rulesOfArbitratorsTwo1: '1. The subject matter of the first round of arbitration may be assets or deposits;',
        rulesOfArbitratorsTwo2: '2. Both parties invite no more than m arbitrators respectively, but only one arbitrator needs to vote in favor;',
        rulesOfArbitratorsTwo3: '3. It is required to pay arbitration fee in proportion when inviting;',
        rulesOfArbitratorsTwo4: '4. Each arbitrator can only be invited by one party of the same order;',
        rulesOfArbitratorsTwo5: '5. The arbitrator can only vote for the affirmative of the invited party, and no voting is required or can vote for the other party;',
        rulesOfArbitratorsTwo6: '6. When voting, the arbitrator must meet four conditions at the same time:',
        rulesOfArbitratorsTwo7: ' (1) invited by one of the order participants;',
        rulesOfArbitratorsTwo8: ' (2) the arbitrator number is within n digits;',
        rulesOfArbitratorsTwo9: ' (3) the deposit balance is greater than the balance required by the arbitration order;',
        rulesOfArbitratorsTwo10: ' (4) the case that did not participate in the second round of arbitration and the deposit was not frozen;',
        rulesOfArbitratorsTwo11: "7. The corresponding deposit will be deducted from the balance of the arbitrator's deposit during voting; ",
        rulesOfArbitratorsTwo12: '8. After one party makes a positive arbitration, the other party needs to make the arbitration result within the specified time;',
        rulesOfArbitratorsTwo13: '9. After expiration, if only one party makes affirmative arbitration, that party wins;',
        rulesOfArbitratorsTwo14: '10. The arbitrator of the winning party can obtain the arbitration fee paid by the invited party;',
        rulesOfArbitratorsTwo15: '11. If the losing party also pays the arbitration fee, it will compensate the winning party;',
        rulesOfArbitratorsTwo16: '12. If both parties have made a positive arbitration within the specified time, enter the second round of arbitration;',

        rulesOfArbitratorsThr1: '1. Entering the second round of arbitration, assets will not be arbitrated separately, but one-time arbitration assets and deposits (except for assets released);',
        rulesOfArbitratorsThr2: '2. The second round of arbitration will arbitrate the first round of arbitration at the same time. If the arbitrators in the first round commit crimes, the deposit can be deducted;',
        rulesOfArbitratorsThr3: '3. The registration system is adopted for the second round of arbitration, and the following conditions shall be met at the same time',
        rulesOfArbitratorsThr4: ' 1) the arbitrator number is within n digits;',
        rulesOfArbitratorsThr5: ' 2) the deposit balance is greater than the balance required by the arbitration order;',
        rulesOfArbitratorsThr6: ' 3) did not participate in other cases in the second round of arbitration, and the deposit was not frozen;',
        rulesOfArbitratorsThr7: '4. Up to K people can sign up;',
        rulesOfArbitratorsThr8: '5. After registration, the j arbitrators with the largest random number enter the arbitration panel;',
        rulesOfArbitratorsThr9: '6. One order can only be registered once at one address;',
        rulesOfArbitratorsThr10: '7. The deposit balance of the applicants is temporarily',
        rulesOfArbitratorsThr11: '8. The arbitration panel jointly negotiates the arbitration scheme and votes on the scheme;',
        rulesOfArbitratorsThr12: '9. The scheme with voting weight greater than half is passed;',
        rulesOfArbitratorsThr13: '10. The adopted scheme shall be adopted by one of the trading parties. If it is not adopted within the specified time, the arbitration panel will be dissolved and the second round of arbitration will be restarted;',
        rulesOfArbitratorsThr14: '11. After restarting, the deposit of the original arbitrator will be unfrozen and you can sign up again;',
        rulesOfArbitratorsThr15: '12. After the scheme is adopted by one party, if the other party or any other interested party has objections within the specified time, the scheme can be revoked through community governance;',
        rulesOfArbitratorsThr16: '13. After voting, the community decides whether to maintain the original judgment or send it back for retrial. If the original judgment is maintained, the scheme will be final and the chain governance will end. If it is sent back for retrial, the original arbitration panel will be dissolved and the second round of arbitration will be restarted;',

      }
    }
  },
  // 中文 ***************************************************
  zh: {
    message: {
      lang: '语言',
      lang1: 'English',
      lang2: '中文',
      navRoutes: [
        { title: '首页', route: '/Homepage' },
        { title: '核心机制', route: '/Coremechanism' },
        { title: '安全规则', route: '/Securityrules' },
        { title: '交易规则', route: '/Transactionrules' },
        { title: '仲裁规则', route: '/Arbitrationrules' },
        { title: '交换', route: '/Exchange' },
        { title: '公开预售', route: '/Activities' },
      ],
	  unknown: '未知的',
	  set: '设置',
	  setPas: '设置密码',
	  enterPas: '请输入密码',
	  enterPasAggin: '请再次输入密码',
	  ConfirmPassword: '确认密码',
	  pasTips: '*请设置8个以上字符至少包含字母数字，请备份好你的密码遗忘无法找回',
	  DataSucceeded: '资料修改成功！',
	  Datafailed: '资料修改失败！',
	  Modifying: '修改中...',
	  personalInformation: '个人信息',
	  essentialInformation: '基本信息',
	  NoData:'暂无数据',
	  menu: '菜单',
	  changeInto: '转入',
	  changeOut: '转出',
	  available: '可用',
	  Recharge: '充值',
	  WithdrawMoney:'提币',
	  ChargeMoney: '充币',
	  decrypt:'解密',
      sumbmit: '提交',
      state: '状态',
      notFill: '暂未填写',
      operation: '操作',
      other: '其他',
      details: '详情',
	  loadMore: '加载更多',
	  contactDes: '查看联系信息',
	  cancel: '取消',
      WhitePaper: '白皮书',
	  phoneNumber: '电话',
	  email: '邮箱',
	  WeChat: '微信',
	  remarks: '交易备注',
	  editremarks: '修改备注',
	  complete: '完成',
	  prompt: '提示',
	  success: '数据修改成功!',
	  failed: '数据修改失败!',
	  orderStateNow: '当前交易状态',
	  enterContent:'请输入内容',
	  enterOrderId: '请输入订单号',
	  enterUnitPrice: '请输入单价',
	  enterAmount: '请输入数量',
	  enterMinNum: '请输入最小量',
	  enterMaxNum: '请输入最大量',
	  enterMargin: '请输入保证金',
	  MinNumEmpty: '最小数量不能为空',
	  MaxNumEmpty: '最大数量不能为空',
	  enterBalanTips: '*保证金余额不足，但仍可公布',
	  contEmpty: '不能为空',
	  rechargeTips: '*您需要在发布销售订单之前进行充值！',
	  rechargeTips1: '请减少数量或充值！',
	  exceedTips: '*这个数量不能超过',
	  currencyIssueOrder: '币币OTC发布订单',
	  suspendBalad:'暂停发放保证金',
	  all: '全部',
	  UserPause: '用户暂停',
	  MerchantSuspension:'商家停牌',
	  earlyReleaseMargin: '提前发放保证金',
	  UserAgreesRelease: '用户同意发布',
	  MerchantAgreesRelease: '商家同意释放',
	  allAgrees: '双方同意释放',
	  ReleaseMargin: '发行保证金',
	  appeal: '上诉',
	  putMoney: '下注',
	  pushMarginRelease: '暂停发放保证金',
	  OnTheShelf: '上架中...',
	  OffTheShelf:'下架',
	  modify:'修改',
	  NotMinNum: '不少于最低数量',
	  NotMaxNum: '不能大于最大数量',
	  assetRchargeTips:'资产余额不足，请先充值！',
	  enterPrivateTips: '请输入私信密码',
	  SelectType: '请选择修改类型',
	  NotcannotMinNum: '最小数量不能大于总数量',
	  NotcannotManNum: '最大数量不能大于总数量',
	  NotCannotDesposit: '用户保证金不能大于100%',
	  MarginLowTips: '此订单可以发布，但保证金余额太低，可能无法交易。请及时补充保证金！',
	  SupMargin: '追加保证金',
	  AssetsLock:'锁仓中的资产（Gaz）',
	  AssetsWith: '可提现资产（Gaz）',
	  AssetsRelease:'一次性可释放资产（Gaz）',
	  Withdrawal: '提现',
	  return: '返回',
	  publicKey: '私信公钥',
	  keyp: '公钥',
	  arbitration:{
		      
		      invitetion: '邀请仲裁员',
			  apply: '申请成为仲裁员',
			  exit: '退出仲裁员',
		  
		      enterAmount: '请输入金额',
			  enterOrderNum: '请输入订单号',
			  arbitratorNick: '仲裁员昵称',
			  
	  		  applyArbitration: '申请成为仲裁员',
			  exitArbitration: '退出仲裁员',
			  serial: '序号',
			  arbitrator: '仲裁员',
			  inviteNumber: '邀请次数',
			  singular: '仲裁单数',
			  regNumber: '报名次数',
			  balance: '保证金余额',
			  normal: '正常',
			  frozen: '冻结',
			  frozenState: '冻结状态',
			  AccountNum: '账号',
			  account: '我的账号',
			  nickname: '我的昵称',
			  NoNickname:'暂无昵称',
			  nick: '昵称',
			  order: '订单号',
			  character: '我的角色',
			  cost: '我缴纳的仲裁费',
			  mark: '我缴纳的仲裁标地',
			  invite: '邀请',
			  invited: '已邀请的仲裁员',
			  assets: '资产',
			  margin: '保证金',
			  marginBalance:'商家保证金余额',
			  payMar1: '商家要求用户交纳的保证金比例',
			  orderNum: '订单号',
			  invitedNum: '我被邀请的订单数',
			  successNum: '我成功仲裁订单数',
			  payBalance: '缴纳保证金额',
			  Serial: '仲裁员编号',
			  partOrderNum: '我参与第二轮仲裁订单数',
			  marginBalan: '保证金余额',
			  withdrawalAmount: '提现金额',
			  fromOrder: '来自发布订单',
			  orderId: '订单ID',
			  merchant: '商家',
			  user: '用户',
			  assetsNum: '资产数',
			  merchantMargin: '商家保证金',
			  merchantMarginLock:'商家锁定的保障金',
			  userMargin: '用户保证金',
			  userMarginLock: '用户锁定的保障金',
			  appealType: '申诉类型',
			  arbitrationResult: '仲裁结果',
			  arbitrationState: '仲裁状态',
			  countdown: '倒计时',
			  balandCountdown: '保证金倒计时',
			  ab_coutdown: '仲裁倒计时',
			  assets: '资产',
			  NotStart: '未开始',
			  hasEend: '已结束',
			  nextArbitration: '进入第二轮仲裁',
			  MerchantsVictory: '商家胜利',
			  userVictory: '用户胜利',
			  arbitrationing: '仲裁中',
			  executed: '已执行',
			  arbitrationEnd: '仲裁结束',
			  dogfall: '平局',
			  myPartTitle: '我参与的第一轮仲裁',
			  myPartOrderTitle: '我参与的订单',
			  myPartOrderSuccssTitle: '我成功仲裁的订单',
			  orderDes: '订单详情',
			  merchantAdress: '商家地址',
			  userAress: '用户地址',
			  beInvited: '被邀请方',
			  M_arbitrator: '商家仲裁员',
			  U_arbitrator: '用户仲裁员',
			  favor: '赞成',
			  implement: '执行',
			  signing: '报名中',
			  singUp: '报名',
			  voteing: '投票中',
			  waiting: '执行等待中',
			  singUpState: '报名状态',
			  OnearbitrationState: '第一轮仲裁状态',
			  TwoarbitrationState: '第二轮仲裁状态',
			  OnearbitrationResult: '第一轮仲裁结果',
			  
			  
	  },
      activit: {
        tips: '请先安装METAMASK插件或刷新页面',
        title: '+邀请获奖',
        addr: '地址',
        copyURL: '复制地址',
        share: '将此链接分享给你的朋友！',
        nickname: '昵称',
        unregistered: '未注册',
        name: '姓名',
        IDnumber: '身份证号',
        First: "第一轮空投",
        reg: '注册领空投',
        Airdroprules: '空投规则',
        BeIssued: '待发放',
        Issued: '已发放',
        AirdropReward: '空投奖励',
        ShareRewards: '分享奖励',
        QuickReg: '一键注册',
        GetPoints: '领取空投',
        Received: '空投已领取',
        Receiving: '空投领取中......',
        authName: '实名认证',
        notOpen: '还未开放',
        AirDis: '空投发放',
        image: '@/assets/banner0.jpg',
        UseUSDT: '可用USDT',
        enterQuant: '请输入数量',
        exchange: '兑换',
        exchangeRecord: '兑换记录',
        SerialNumbe: '序号',
        usdt: '单价（usdt）',
        gaz: "数量（gaz）",
        date: '日期',
        CommissionRecord: '返佣记录',
        RecommendedAddress: '推荐地址',
        LockQuantity: '锁仓数量',
        PrimaryRelease: '一次释放',
        extract: '提取',
        LinearRelease: '线性释放',
        ExtractableQuantity: '可提取数量',
        publicDes: '公开预售说明',
        1: '1.公开预售单价0.5usdt；',
        2: '2.第一次兑换需先授权，授权额度为兑换数量的100倍，下次兑换在额度范围内无需再授权；',
        3: '3.兑换成功后，10%的Gaz转入一次性释放钱包，开始公测后统一释放。90%进入锁仓合约，开启挖矿后分180天线性释放。',
        4: '4.推荐人无条件获得10%的usdt返佣；如果推荐人锁仓钱包有9000枚以上gaz，可额外获得10%的Gaz返佣，该Gaz统一锁仓180天线性释放。',
        5: '第一轮空投(注册领空投) 说明',
        51: '1.otc交易需要实名认证，交易前需要注册身份信息；',
        52: '2.所有信息均注册在智能合约中，敏感信息加密存储;',
        53: '3.一个有效的身份信息只能领取一次空投；',
        54: '4.注册成功后，注册者自动获得20个待发放gaz，推荐者获得10个待发放gaz；',
        55: '5.注册者实名认证通过后，Gaz发放至锁仓钱包；',
        56: '6.推荐者的gaz只有在注册者实名认证通过后才能发放至锁仓钱包;',
        57: '7.注册空投总额为63万枚，领完为止；',
        58: '8.所有空投均在开启挖矿后分180天线性释放。',
        61: '以上信息,均保存在智能合约中, * 为公开信息, ** 为不公开信息',
        62: '姓名和身份证号需与保存在智能合约中的一致',
        authentication: '认证',
        register: '注册',
        IncompleteParameters: '参数不完整',
        partSale: '参与预售',
        630: '全球公开发行630万枚',
        followWeb: '关注官方',
        save5: '额外赠送5个Gaz',
        enterNick: '请输入昵称',
        enterName: '请输入姓名',
        enterIdCard: '请输入身份证号',
      },
      dapp: {
		PrivateMessage:'私信信息',
		orderSuspended: '订单已暂停',
		orederCancelled: '订单已取消',
		message: '信息',
		payTime: '付款时间',
		orderTime: '下单时间',
		notReleased: '未释放',
		released: '已释放',
		fristOrder: '第一轮仲裁订单',
		secondOrder: '第二轮仲裁订单',
		type: '类型',
		orderType: '订单类型',
		assetsType: '资产类型',
		amount: '数量',
		transactionNum: '交易数量',
		minAmount: '最低量',
		maxAmount: '最高量',
		limit: '限额',
		unitPrice: '单价', 
		MarginRatio: '用户保证金比例',
		orderStatus: '订单状态',
		ReceivingOrder: '接单中',
		Resting: '休息中',
		ModifyType: '修改类型',
		ModifyPrice:'修改单价',
		ModifiedQuantity: '修改数量',
		ModifyOrderStatus: '修改订单状态',
		preiceDes: '单价为0表示双方线下协商！',
		forSale: '出售',
		blandAsk: '保证金比咧',
		assetRelease: '资产释放',
		marginRelease: '保证金释放',
		privateLetter: '私信',
		DMSInformation: '私信信息',
		explain: '说明',
		Unit: '单',
        website: '官网',
        coinNet: '币安智能链主网',
        HecoNet: '火币Heco主网',
        EthereumRinkeby: '以太坊Rinkeby',
        EthereumNet: '以太坊主网',
        WaveNet: '波场主网',

        CurrencyOTC: '法币OTC',
        CoinOTC: '币币OTC',
        sell: '出售',
        buy: '购买',
		pay: '支付',
		received: '收到',
		getCurrency: '您将支付或接收的法定货币',
		mortgageDes: '你要抵押的押金',

        currency: '币种',
        unit: '单位',
        Merchant: '商家',

        tradeList: '交易列表',
        ReleaseOrder: '发布订单',

        wallet: '钱包',
        rule: '规则',
        OrderCenter: '订单中心',
        PersonalCenter: '个人中心',
        Arbitration: '仲裁',


        legalWallet: '法币钱包',
        CoinWallet: '币币钱包',
        LockWallet: '锁仓钱包',

        capitalAsset: '净资本资产',


        legalIssue: '法币发布',
        LegalTransaction: '法币交易',
        CurrencyIssue: '币币发布',
        CurrencyTransaction: '币币交易',

        arbitratorsLister: '仲裁员名单',
        ArbitrationList: '仲裁列表',
        firstOrders: '第一轮仲裁订单',
        myPart: '我参与的',
		myOrder: '我参与的订单',
		succeedOrderL: '我成功仲裁的订单',


        TransactionRules: '交易规则',
        MarginRules: '保证金规则',
        ArbitratorsRules: '仲裁员规则',


        transactionRules1: '1.交易者可以充值任何资产到智能合约，但只有通过社区治理批准的资产才能发布订单；',
        transactionRules2: '2.除了交易中的资产和保证金处于冻结状态不能提现外，其余资产可以自由提现；',
        transactionRules3: '3.商家发布订单时，不需要保证金，但保证金余额不足，用户拍单时有可能失败；',
        transactionRules4: '4.商家保证金冻结比例为20%，后期可以根据社区治理修改比例；',
        transactionRules5: '5.用户冻结的保证金比例由商家设置；',
        transactionRules6: '6.商家发布买入订单，不需要先充值资产；',
        transactionRules7: '7.商家发布卖出订单，需要先充值，并冻结相应数量的资产；',
        transactionRules8: '8.商家可以修改订单中的交易数量和单价；',
        transactionRules9: '9.资产和保证金只能在交易双方之间划转；',
        transactionRules10: '10.撤单只能由付款方触发，撤单合约不收取手续费；',
        transactionRules11: '11.放币只能由收款方触发，放币时合约将扣除手续费；',
        transactionRules12: '12.如付款方未付款或卖出方没放币，可以申请仲裁；',
        transactionRules13: '13.保证金在放币3天之后释放，双方达成协议可以提前释放；',
        transactionRules14: '14.保证金释放之前，任何一方可以触发暂停释放；',
        transactionRules15: '15.为防止恶意暂停，用户触发暂停时保证金需要在10 % 以上；',
        transactionRules16: '16.如收款方资金冻结，双方可以协商保证金赔偿比例，不能达成协议，可以申请仲裁；',


        marginRules1: '第1阶段，交易保证金用主流稳定币，仲裁保证金用平台币gaz；',
        marginRules2: '以太坊和波场用usdt作保证金，火币生态链用husd作保证金；',
        marginRules3: '保证金需要先充值再划转；',
        marginRules4: '保证金在拍单时自动冻结；',
        marginRules5: '任何一方保证金可用余额不足，将导致拍单失败；',

        QualificationArbitrators: '仲裁员资格',
        firstRules: '第一轮仲裁规则',
        twoRules: '第二轮仲裁规则',


        rulesOfArbitratorsOne1: '1. 仲裁员需要先报名，并向合约抵押不低于系统最低要求的保证金；',
        rulesOfArbitratorsOne2: '2. 报名成功后，合约按顺序返回一个编号, 只有前n位才能参与仲裁；',
        rulesOfArbitratorsOne3: '3. 保证金不可以添加，一个地址只能同时拥有一个编号；',
        rulesOfArbitratorsOne4: '4. 参与仲裁会释放部分保证金，保证金也可以提现；',
        rulesOfArbitratorsOne5: '5. 参与第二轮仲裁会暂时冻结保证金直到仲裁结束；',
        rulesOfArbitratorsOne6: '6. 保证金低于最低要求后，系统收回该地址编号；',
        rulesOfArbitratorsOne7: '7. 空缺编号由该编号以后的第n位地址填补；',
        rulesOfArbitratorsOne8: '8. 如果n位以后对应的地址为空，则由最后一位地址来填补；',
        rulesOfArbitratorsOne9: '9. 如果有仲裁员作恶，社区可以提案罢免仲裁员',


        rulesOfArbitratorsTwo1: '1. 第一轮仲裁的标的可能是资产，也可能是保证金；',
        rulesOfArbitratorsTwo2: '2. 交易双方分别邀请仲裁员不超过m位，但只需一位仲裁员投出赞成票；',
        rulesOfArbitratorsTwo3: '3. 邀请时必选按比例缴纳仲裁费；',
        rulesOfArbitratorsTwo4: '4. 每位仲裁员只能被同一个订单的一方邀请；',
        rulesOfArbitratorsTwo5: '5. 仲裁员只能做出被邀请方肯定的投票, 否定不需要投票, 也不能为对方投票；',
        rulesOfArbitratorsTwo6: '6. 投票时，仲裁员需同时满足4个条件：',
        rulesOfArbitratorsTwo7: '（1）被该订单交易方之一邀请；',
        rulesOfArbitratorsTwo8: '（2）仲裁员编号在n位以内；',
        rulesOfArbitratorsTwo9: '（3）保证金余额大于仲裁订单要求的余额；',
        rulesOfArbitratorsTwo10: '（4）没有参与第二轮仲裁的案子，保证金未被冻结；',
        rulesOfArbitratorsTwo11: '7. 投票时会从仲裁员的保证金余额中扣除相应保证金；',
        rulesOfArbitratorsTwo12: '8. 在一方做出肯定仲裁后，另一方需在规定的时间内做出仲裁结果；',
        rulesOfArbitratorsTwo13: '9. 过期后，如果只有一方做出肯定仲裁，则该方获胜；',
        rulesOfArbitratorsTwo14: '10. 获胜一方的仲裁员可获得被邀请方缴纳的仲裁费；',
        rulesOfArbitratorsTwo15: '11. 如果失败一方也缴纳了仲裁费，则将弥补给获胜方；',
        rulesOfArbitratorsTwo16: '12. 如果在规定的时间内，双方都做出了肯定的仲裁，则进入第二轮仲裁；',


        rulesOfArbitratorsThr1: '1. 进入第二轮仲裁不单独仲裁资产，一次性仲裁资产和保证金（资产已释放除外）；',
        rulesOfArbitratorsThr2: '2. 第二轮仲裁同时对第一轮的仲裁行为进行仲裁，如第一轮仲裁员作恶，可以扣除保证金；',
        rulesOfArbitratorsThr3: '3. 第二轮仲裁采取报名制，需同时具有以下条件',
        rulesOfArbitratorsThr4: ' 1）仲裁员编号在n位以内；',
        rulesOfArbitratorsThr5: ' 2）保证金余额大于仲裁订单要求的余额；',
        rulesOfArbitratorsThr6: ' 3）没有参与其他第二轮仲裁的案子，保证金未被冻结；',
        rulesOfArbitratorsThr7: '4. 最多可以有k人参与报名；',
        rulesOfArbitratorsThr8: '5. 报名结束后，随机数最大的j名仲裁员进入仲裁团；',
        rulesOfArbitratorsThr9: '6. 同一个订单一个地址只能报名一次；',
        rulesOfArbitratorsThr10: '7. 报名入选者的保证金余额被临时',
        rulesOfArbitratorsThr11: '8. 仲裁团共同商议仲裁方案，并对方案投票；',
        rulesOfArbitratorsThr12: '9. 投票权重大于半数的方案获得通过；',
        rulesOfArbitratorsThr13: '10. 通过的方案需被交易双方之一采纳，如在规定时间内未被采纳，将解散仲裁团，重启第二轮仲裁；',
        rulesOfArbitratorsThr14: '11. 重启后，原来仲裁员的保证金解冻，可以再次报名；',
        rulesOfArbitratorsThr15: '12. 方案被一方采纳后，在规定时间内，另一方或其他任何相关利益方有反对意见，可通过社区治理撤销该方案；',
        rulesOfArbitratorsThr16: '13. 社区经过投票，决定维持原判还是发回重审，如果维持原判，方案即为终审，链上治理结束，如果发回重审，原仲裁团解散，重启第二轮仲裁；',
      }
    }
  }
}