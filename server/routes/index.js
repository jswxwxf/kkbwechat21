var express = require('express');
var router = express.Router();

router.get('/event/*', function(req, res, next) {
  res.render('event', { title: '开开保' });
});

router.get('/wxevtlnk', function(req, res, next) {
  var route = req.query.state.replace('.', '/');
  route = route + '?' + req.url.split('?')[1];
  route = '../../event/#/' + route;
  res.redirect(route);
});

router.get('/license', function(req, res, next) {
  res.render('page', { title: '开开保', pageUrl: 'features/welcome/license.html' });
});

router.get('/privacy', function(req, res, next) {
  res.render('page', { title: '开开保', pageUrl: 'features/welcome/privacy.html' });
});

router.get('/auto-agreement', function(req, res, next) {
  res.render('page', { title: '开开保', pageUrl: 'features/share/register/agreements/auto.html' });
});

router.get('/agreements/green', function(req, res, next) {
  res.render('page', { title: '开开保', pageUrl: 'features/insurance/lcb/green-agreement.html' });
});

router.get('/agreements/hunt', function(req, res, next) {
  res.render('page', { title: '开开保', pageUrl: 'features/insurance/lcb/hunt-agreement.html' });
});

router.get('/rules/delay', function(req, res, next) {
  res.render('page', { title: '开开保', pageUrl: 'features/insurance/delay/rule.html' });
});

router.get('/rules/bean', function(req, res, next) {
  res.render('page', { title: '开开保', pageUrl: 'features/user/wallet/bean-rule.html' });
});

router.get('/sigintro', function(req, res, next) {
  res.render('page', { title: '开开保', pageUrl: 'features/user/device/sigintro.html' });
});

router.get('/entraintro', function(req, res, next) {
  res.render('page', { title: '开开保', pageUrl: 'features/insurance/compensate/intro.html' });
});

router.get('/video', function(req, res, next) {
  res.render('page', { title: '开开保', pageUrl: 'features/welcome/intro/video.html' });
});

router.get('/talk', function(req, res, next) {
  res.redirect('../#/talk?full=true');
});

router.get('/user-faq', function(req, res, next) {
  res.render('page', { title: '开开保', pageUrl: 'features/user/about/faq.html' });
});

router.get('/user-contact', function(req, res, next) {
  res.render('page', { title: '开开保', pageUrl: 'features/user/about/contact.html' });
});

router.get('/user/faq', function(req, res, next) {
  res.render('page', { title: '开开保', pageUrl: 'features/user/about/faq.html' });
});

router.get('/user/contact', function(req, res, next) {
  res.render('page', { title: '开开保', pageUrl: 'features/user/about/contact.html' });
});

router.get('/order-list', function(req, res, next) {
  res.redirect('../#/order/list');
});

router.get('/order-pay', function(req, res, next) {
  res.redirect('../#/order/pay?' + req.url.split('?')[1]);
});

/**
 * 所有需要支付的页面都要放到 /pay 下
 */

router.get('/pay/compensate2', function(req, res, next) {
  res.redirect('../#/insurance/compensate2');
});

router.get('/pay/event/compensate2', function(req, res, next) {
  res.redirect('../../event/#/compensate2/buy');
});

router.get('/share-draw-scratch', function(req, res, next) {
  res.redirect('../#/share/draw/scratch?' + req.url.split('?')[1]);
});

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.render('index', { title: '开开保' });
});

module.exports = router;
