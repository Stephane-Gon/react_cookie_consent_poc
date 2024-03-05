export const pt = {
  consentModal: {
    title: 'Aviso de cookies',
    description:
      'Este website utiliza cookies necessários ao funcionamento do website e/ou dos serviços prestados e cookies de desempenho e segmentação que nos ajudam a melhorar a sua experiência e fornecem-nos informações sobre a utilização do website. Com exceção dos cookies necessários, a utilização de cookies depende sempre da sua aceitação. Saiba mais',
    acceptAllBtn: 'Aceito',
    acceptNecessaryBtn: 'Não aceito',
    showPreferencesBtn: 'Definições de Cookies',
    footer: `
      <a href="https://e2r.ubiwhere.com/pt/politica-privacidade/" target="_blank">Política de Privacidade</a>
    `,
  },
  preferencesModal: {
    title: 'Definições de Cookies',
    acceptAllBtn: 'Aceito',
    acceptNecessaryBtn: 'Não aceito',
    savePreferencesBtn: 'Guardar',
    closeIconLabel: 'Fechar',
    serviceCounterLabel: 'Serviço|Serviços',
    sections: [
      {
        title: 'As suas preferências de privacidade',
        description: `Neste painel pode optar pelas suas preferências relacionadas com o processo de informação pessoal. Pode rever e alterar as suas escolhas em qualquer momento através deste painel. Para rejeitar o consentimento de uma atividade específico descrita em baixo, selecione para desativar ou clique para "Rejeitar todos" e confirme para guardar as suas escolhas.`,
      },
      {
        title: 'Necessárias',
        description:
          'Estas cookies são essenciais ao funcionamento apropriado do website e não podem ser desativadas.',

        linkedCategory: 'necessary',
        cookieTable: {
          caption: 'Cookies Necessárias',
          headers: {
            name: 'Cookie',
            domain: 'Fornecedor',
            desc: 'Descrição',
            expire: 'Duração',
          },
          body: [
            {
              name: 'cc_cookie',
              domain: 'Cookie Consent',
              desc: 'Usada para guardar o seu consentimento, apenas usada pelo sistema de consentimento de cookies.',
              expire: '1 ano',
            },
          ],
        },
      },
      {
        title: 'Estatísticas',
        description:
          'Estas cookies recolhem informação sobre como utiliza o website. Toda a informação recolhida é anónima e não é possível identificar o utilizador.',
        linkedCategory: 'analytics',
        cookieTable: {
          caption: 'Cookie table',
          headers: {
            name: 'Cookie',
            domain: 'Fornecedor',
            desc: 'Descrição',
            expire: 'Duração',
          },
          body: [
            {
              name: '_ga',
              domain: 'Google Analytics example',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna sapien, pulvinar auctor nunc ut, vulputate sagittis nunc.',
              expire: '2 ano',
            },
            {
              name: '_ga_example',
              domain: 'Google Analytics example',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna sapien, pulvinar auctor nunc ut, vulputate sagittis nunc.',
              expire: '1 ano',
            },
            {
              name: '_lr_example',
              domain: 'LogRocket example',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna sapien, pulvinar auctor nunc ut, vulputate sagittis nunc.',
              expire: '1 ano',
            },
          ],
        },
      },
      {
        title: 'Mais informações',
        description:
          'Para mais informações ou pesquisas relacionadas com a política de cookies e as suas escolhas verifique a <a href="https://e2r.ubiwhere.com/pt/politica-privacidade/" target="_blank" rel="noreferrer">Política de Cookies</a>',
      },
    ],
  },
}