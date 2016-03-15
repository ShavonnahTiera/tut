Package.describe({
  summary: 'Advanced tutorial content',
  version: '0.0.1',
  name: 'intermediate-meteor'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');
  api.use([
    'simple:markdown-templating@1.2.7',
    'templating',
    'underscore',
    'jsx@0.1.1',
    'simple:highlight.js@1.0.9',
    'reactive-var',
    'less',
    'ecmascript',
    'mdg:tutorial-step-diff-compiler@0.1.0',
    'mdg:tutorial-diff-box@0.3.0',
    'mdg:tutorial-registry@0.1.1'
  ]);

  api.addFiles([
    'metadata.js',
  ]);

  api.addFiles([
    'step01.md',
    'step02.md',
    'step03.md',
    'step04.md',
    'step05.md',
    'step07.md',
    'step08.md',
    'step09.md',
    'step10.md',
    'step11.md',
    'step12.md',
    'step13.md',
    'step14.md',
    'step15.md',
    'step16.md',
    'step17.md',
    'step18.md',
    'step19.md',
    'step20.md',
    'step21.md',
    'step22.md',
    'step23.md',
    'step24.md',
    'step25.md',

    'generated/intermediate.multi.patch',
  ], 'client');

  api.export('TUTORIAL_PAGES');

  api.export('INTERMEDIATE_TUT');
  
});
