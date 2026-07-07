/**
 * TEF Canada — Expression Orale (Speaking)
 * Course content: Classes 1 to 8
 *
 * Classes 1–3  : Section A (obtenir des informations en posant des questions)
 * Classes 4–8  : Section B (convaincre / défendre un point de vue) — bloc approfondi
 *                et orienté exercices, avec un examen blanc final (Classe 8).
 *
 * Each class contains:
 *  - objectives : learning goals
 *  - lessons    : teaching blocks (heading + paragraphs + optional note/tip)
 *  - dialogue   : an example script (optional)
 *  - vocabulary : useful expressions (fr / en)
 *  - quiz       : practice questions
 *      * type "mcq"  -> multiple choice with a correct answer + explanation
 *      * type "open" -> open speaking prompt with a model answer to self-check against
 */

const COURSE = {
  title: "TEF Canada — Expression Orale",
  subtitle: "Cours de production orale · Classes 1 à 8",
  classes: [
    /* ============================= CLASS 1 ============================= */
    {
      id: 1,
      title: "Découvrir l'épreuve",
      subtitle: "Format, durée et évaluation de l'Expression Orale",
      duration: "≈ 60 min",
      objectives: [
        "Comprendre le déroulement complet de l'épreuve d'Expression Orale.",
        "Distinguer la Section A (obtenir des informations) et la Section B (convaincre).",
        "Connaître les critères de notation et l'échelle NCLC / CLB.",
        "Savoir gérer le temps de préparation et de passation."
      ],
      lessons: [
        {
          heading: "Qu'est-ce que le TEF Canada ?",
          body: [
            "Le TEF Canada (Test d'évaluation de français) est un examen reconnu par IRCC (Immigration, Réfugiés et Citoyenneté Canada) pour l'immigration économique et la citoyenneté.",
            "L'épreuve d'Expression Orale évalue votre capacité à communiquer à l'oral avec un examinateur, dans des situations proches de la vie réelle. Elle dure environ 15 minutes et se compose de deux tâches distinctes, la Section A et la Section B."
          ],
          note: "Vous parlez avec un examinateur (ou une personne qui joue un rôle). Ce n'est PAS un simple exposé : c'est une interaction."
        },
        {
          heading: "Section A — Obtenir des informations (≈ 5 minutes)",
          body: [
            "On vous remet une petite annonce (offre d'emploi, location, formation, service, vente…). Votre rôle : téléphoner ou vous adresser à une personne pour obtenir un maximum d'informations.",
            "Vous devez POSER DES QUESTIONS. C'est vous qui menez l'échange : l'examinateur répond, mais n'ajoute presque rien de lui-même. Si vous ne posez pas de questions, la conversation s'arrête."
          ]
        },
        {
          heading: "Section B — Convaincre / exprimer un point de vue (≈ 10 minutes)",
          body: [
            "On vous remet un court document (un fait de société, une proposition, une petite annonce d'un produit ou d'une activité). Votre rôle : convaincre votre interlocuteur (un ami, un collègue, un proche) de faire quelque chose ou d'adopter votre point de vue.",
            "Ici, vous devez ARGUMENTER : donner des arguments, des exemples, réagir aux objections, et rester convaincant jusqu'au bout."
          ],
          note: "Section A = je pose des questions. Section B = je défends une opinion. Ne confondez pas les deux !"
        },
        {
          heading: "Notation et niveaux (NCLC / CLB)",
          body: [
            "L'Expression Orale est notée sur 450 points, convertis en niveaux NCLC (Niveaux de compétence linguistique canadiens) / CLB. Par exemple, environ 310–348 points correspondent au NCLC 7, un niveau souvent visé pour Entrée express.",
            "L'examinateur évalue notamment : l'adéquation de la réponse à la tâche, la cohérence et la richesse du discours, l'étendue du vocabulaire, la correction grammaticale, l'aisance (fluidité) et la prononciation."
          ]
        }
      ],
      vocabulary: [
        { fr: "l'épreuve d'expression orale", en: "the speaking test" },
        { fr: "l'examinateur / l'examinatrice", en: "the examiner" },
        { fr: "une petite annonce", en: "a classified ad" },
        { fr: "obtenir des informations", en: "to obtain information" },
        { fr: "convaincre quelqu'un", en: "to convince someone" },
        { fr: "le temps de préparation", en: "preparation time" },
        { fr: "mener l'échange", en: "to lead the exchange" }
      ],
      quiz: [
        {
          type: "mcq",
          question: "En Section A, quel est votre rôle principal ?",
          options: [
            "Donner votre opinion et la défendre",
            "Poser des questions pour obtenir des informations",
            "Raconter une histoire personnelle",
            "Corriger l'examinateur"
          ],
          answer: 1,
          explanation: "La Section A consiste à obtenir un maximum d'informations en posant des questions à partir d'une annonce."
        },
        {
          type: "mcq",
          question: "Combien de temps dure environ la Section B ?",
          options: ["2 minutes", "5 minutes", "10 minutes", "20 minutes"],
          answer: 2,
          explanation: "La Section B (convaincre) est la plus longue, environ 10 minutes, contre 5 minutes pour la Section A."
        },
        {
          type: "mcq",
          question: "Laquelle de ces compétences N'EST PAS évaluée à l'oral ?",
          options: [
            "L'aisance et la fluidité",
            "La richesse du vocabulaire",
            "L'orthographe",
            "La prononciation"
          ],
          answer: 2,
          explanation: "L'orthographe concerne l'écrit. À l'oral, on évalue la prononciation, l'aisance, la grammaire, le vocabulaire et la pertinence."
        },
        {
          type: "open",
          question: "Expliquez à voix haute, en 30 secondes, la différence entre la Section A et la Section B.",
          model: "La Section A dure environ cinq minutes : à partir d'une petite annonce, je dois poser des questions pour obtenir le maximum d'informations, c'est donc moi qui mène l'échange. La Section B dure environ dix minutes : je dois convaincre mon interlocuteur d'accepter une proposition ou de partager mon point de vue, en donnant des arguments et des exemples."
        }
      ]
    },

    /* ============================= CLASS 2 ============================= */
    {
      id: 2,
      title: "Section A — Poser des questions",
      subtitle: "Les trois formes de questions et le registre formel",
      duration: "≈ 60 min",
      objectives: [
        "Maîtriser les trois façons de poser une question en français.",
        "Utiliser le registre formel (vouvoiement) attendu en Section A.",
        "Employer les mots interrogatifs adaptés à chaque type d'information.",
        "Ouvrir et présenter l'appel de façon polie et naturelle."
      ],
      lessons: [
        {
          heading: "Les trois formes de la question",
          body: [
            "1) L'intonation (familier / oral courant) : « Vous proposez le logement meublé ? »",
            "2) « Est-ce que » (standard, très sûr) : « Est-ce que le logement est meublé ? »",
            "3) L'inversion (soutenu, valorisé à l'examen) : « Le logement est-il meublé ? »",
            "Variez les trois formes : cela montre l'étendue de votre grammaire. Mais en cas de doute, « est-ce que » est toujours correct et sûr."
          ],
          note: "L'inversion impressionne l'examinateur, mais une inversion incorrecte fait mauvais effet. Utilisez-la seulement quand vous êtes sûr(e)."
        },
        {
          heading: "Les mots interrogatifs essentiels",
          body: [
            "Quel / quelle / quels / quelles (+ nom) : « Quel est le prix ? », « Quelles sont les conditions ? »",
            "Combien : « Combien de temps dure la formation ? », « Combien coûte l'inscription ? »",
            "Où, quand, comment, pourquoi : lieu, moment, manière, raison.",
            "Qu'est-ce que / que : « Qu'est-ce qui est inclus dans le prix ? »"
          ]
        },
        {
          heading: "Le registre formel : vouvoyer",
          body: [
            "En Section A, vous vous adressez à un inconnu : vouvoyez toujours (« vous »).",
            "Ouvrez poliment : « Bonjour, je vous appelle au sujet de votre annonce pour… J'aurais quelques questions à vous poser. »",
            "Adoucissez vos questions avec le conditionnel : « Pourriez-vous me préciser… ? », « Est-ce qu'il serait possible de… ? »"
          ]
        }
      ],
      dialogue: {
        title: "Exemple — Annonce : Cours de cuisine le samedi",
        lines: [
          { speaker: "Candidat", text: "Bonjour, je vous appelle au sujet de votre annonce pour les cours de cuisine du samedi. J'aurais quelques questions." },
          { speaker: "Examinateur", text: "Bonjour, bien sûr, je vous écoute." },
          { speaker: "Candidat", text: "Tout d'abord, à quelle heure le cours commence-t-il ?" },
          { speaker: "Examinateur", text: "Il commence à 10 heures." },
          { speaker: "Candidat", text: "Très bien. Et pourriez-vous me préciser combien coûte une séance ?" },
          { speaker: "Examinateur", text: "C'est 40 dollars la séance." },
          { speaker: "Candidat", text: "D'accord. Est-ce que le matériel et les ingrédients sont inclus dans ce prix ?" }
        ]
      },
      vocabulary: [
        { fr: "je vous appelle au sujet de…", en: "I'm calling about…" },
        { fr: "j'aurais quelques questions", en: "I have a few questions" },
        { fr: "Pourriez-vous me préciser… ?", en: "Could you specify for me…?" },
        { fr: "Est-ce qu'il serait possible de… ?", en: "Would it be possible to…?" },
        { fr: "Quel est le tarif / le prix ?", en: "What is the price?" },
        { fr: "Qu'est-ce qui est inclus ?", en: "What is included?" }
      ],
      quiz: [
        {
          type: "mcq",
          question: "Quelle phrase utilise correctement l'inversion (registre soutenu) ?",
          options: [
            "Le cours il commence quand ?",
            "Quand est-ce que le cours commence ?",
            "Quand le cours commence-t-il ?",
            "Le cours commence quand ?"
          ],
          answer: 2,
          explanation: "« Quand le cours commence-t-il ? » : le sujet et le verbe sont inversés avec le trait d'union, c'est la forme soutenue."
        },
        {
          type: "mcq",
          question: "Pour demander le prix, quelle formulation est la plus adaptée et polie ?",
          options: [
            "C'est combien ?",
            "Pourriez-vous me préciser le tarif, s'il vous plaît ?",
            "Ça coûte cher ?",
            "Donnez-moi le prix."
          ],
          answer: 1,
          explanation: "Le conditionnel « Pourriez-vous » adoucit la demande et correspond au registre formel attendu."
        },
        {
          type: "mcq",
          question: "Complétez : « ______ sont les conditions d'inscription ? »",
          options: ["Quel", "Quelle", "Quels", "Quelles"],
          answer: 3,
          explanation: "« Conditions » est féminin pluriel, donc « Quelles ». L'accord du mot interrogatif « quel » suit le nom."
        },
        {
          type: "open",
          question: "Annonce : « À louer : appartement 2 chambres, centre-ville. » Posez 3 questions polies, chacune sous une forme différente (intonation, est-ce que, inversion).",
          model: "Intonation : « L'appartement est disponible tout de suite ? » — Est-ce que : « Est-ce que les charges sont comprises dans le loyer ? » — Inversion : « L'appartement est-il meublé ? » Vous pouvez ouvrir par : « Bonjour, je vous appelle au sujet de votre annonce pour l'appartement au centre-ville, j'aurais quelques questions. »"
        }
      ]
    },

    /* ============================= CLASS 3 ============================= */
    {
      id: 3,
      title: "Section A — Stratégies avancées",
      subtitle: "Couvrir tous les aspects, relancer et réagir",
      duration: "≈ 60 min",
      objectives: [
        "Balayer systématiquement tous les aspects d'une annonce (grille de questions).",
        "Réagir aux réponses et relancer la conversation.",
        "Reformuler et demander des précisions.",
        "Ouvrir et clôturer l'échange de façon naturelle."
      ],
      lessons: [
        {
          heading: "La grille des questions : ne rien oublier",
          body: [
            "Pour obtenir un maximum d'informations, pensez à couvrir plusieurs catégories : le PRIX (tarif, réductions, modes de paiement), le LIEU (adresse, accès, transport), le TEMPS (dates, horaires, durée), les CONDITIONS (qui peut participer, documents requis), et les DÉTAILS pratiques (ce qui est inclus, ce qu'il faut apporter).",
            "Astuce : mémorisez ces catégories comme une check-list mentale. Elles s'adaptent à presque toutes les annonces."
          ],
          note: "L'examinateur évalue la QUANTITÉ et la VARIÉTÉ des informations obtenues. Plus vous couvrez d'aspects, mieux c'est."
        },
        {
          heading: "Réagir et relancer",
          body: [
            "Ne posez pas vos questions comme une liste mécanique. Réagissez d'abord à la réponse : « Ah, très bien ! », « Parfait. », « D'accord, je vois. », puis enchaînez.",
            "Rebondissez sur une réponse pour creuser : si on vous dit « le cours dure 3 mois », relancez : « Et à quelle fréquence ont lieu les séances ? »",
            "Demandez des précisions : « C'est-à-dire ? », « Pourriez-vous développer un peu ? », « Qu'entendez-vous par là ? »"
          ]
        },
        {
          heading: "Ouvrir et clôturer proprement",
          body: [
            "Ouverture : « Bonjour, je vous appelle au sujet de votre annonce. J'aurais plusieurs questions, si vous avez un moment. »",
            "Clôture : « Je vous remercie beaucoup pour toutes ces informations. Je vais réfléchir et je vous recontacterai. Bonne journée ! »",
            "Une belle ouverture et une belle clôture encadrent votre performance et laissent une bonne impression."
          ]
        }
      ],
      dialogue: {
        title: "Exemple — Annonce : Offre d'emploi, serveur/serveuse",
        lines: [
          { speaker: "Candidat", text: "Bonjour, je vous appelle au sujet de votre annonce pour le poste de serveur. J'aurais plusieurs questions." },
          { speaker: "Examinateur", text: "Bonjour, allez-y." },
          { speaker: "Candidat", text: "Pour commencer, quels seraient les horaires de travail ?" },
          { speaker: "Examinateur", text: "Principalement les soirs et les week-ends." },
          { speaker: "Candidat", text: "D'accord, je vois. Et à combien s'élèverait le salaire horaire ?" },
          { speaker: "Examinateur", text: "Quinze dollars de l'heure, plus les pourboires." },
          { speaker: "Candidat", text: "Parfait. Est-ce qu'une expérience préalable est exigée pour postuler ?" }
        ]
      },
      vocabulary: [
        { fr: "D'accord, je vois.", en: "OK, I see." },
        { fr: "C'est-à-dire ?", en: "Meaning? / That is?" },
        { fr: "Pourriez-vous développer ?", en: "Could you elaborate?" },
        { fr: "à quelle fréquence…", en: "how often…" },
        { fr: "Je vous remercie pour ces informations.", en: "Thank you for this information." },
        { fr: "Je vous recontacterai.", en: "I'll get back to you." }
      ],
      quiz: [
        {
          type: "mcq",
          question: "L'examinateur dit : « La formation dure six mois. » Quelle est la MEILLEURE relance ?",
          options: [
            "Merci, au revoir.",
            "Et à quelle fréquence ont lieu les cours pendant ces six mois ?",
            "Six mois, c'est long.",
            "Je n'ai pas compris."
          ],
          answer: 1,
          explanation: "Relancer avec une nouvelle question précise (la fréquence) montre que vous creusez le sujet et menez l'échange."
        },
        {
          type: "mcq",
          question: "Parmi ces catégories, laquelle manque le plus souvent dans les réponses des candidats ?",
          options: [
            "Le prix",
            "Les horaires",
            "Les conditions / documents requis",
            "L'adresse"
          ],
          answer: 2,
          explanation: "Les candidats pensent au prix et aux horaires mais oublient souvent les conditions (qui peut participer, quels documents fournir)."
        },
        {
          type: "mcq",
          question: "Quelle formule convient pour CLÔTURER l'échange ?",
          options: [
            "Bon, c'est tout ?",
            "Je vous remercie pour ces informations, je vous recontacterai. Bonne journée !",
            "Au revoir.",
            "OK ciao."
          ],
          answer: 1,
          explanation: "Une clôture polie et complète (remerciement + intention + salutation) laisse une bonne impression finale."
        },
        {
          type: "open",
          question: "Annonce : « Stage intensif de photographie — 1 semaine. » Préparez 5 questions couvrant 5 catégories différentes (prix, lieu, temps, conditions, détails).",
          model: "Prix : « Quel est le tarif du stage, et existe-t-il des réductions ? » — Lieu : « Où le stage se déroule-t-il exactement ? » — Temps : « Quels sont les horaires quotidiens ? » — Conditions : « Faut-il apporter son propre appareil photo ? » — Détails : « Qu'est-ce qui est inclus : le matériel, un certificat, un repas ? »"
        }
      ]
    },

    /* ============================= CLASS 4 ============================= */
    {
      id: 4,
      title: "Section B — Convaincre : les bases",
      subtitle: "Structurer une argumentation et exprimer son opinion",
      duration: "≈ 75 min",
      objectives: [
        "Structurer un discours persuasif : introduction, arguments, conclusion.",
        "Exprimer clairement son opinion et varier les tournures.",
        "Maîtriser les connecteurs logiques d'argumentation.",
        "Appuyer chaque argument par un exemple concret (règle « argument + exemple »).",
        "Choisir le bon registre (tu / vous) selon l'interlocuteur."
      ],
      lessons: [
        {
          heading: "La structure d'un discours convaincant",
          body: [
            "1) Introduction : annoncez votre intention. « J'aimerais te convaincre de… parce que je pense que c'est une excellente idée. »",
            "2) Arguments : présentez 2 ou 3 arguments, chacun suivi d'un exemple. « D'abord… ; ensuite… ; enfin… »",
            "3) Conclusion : reformulez et lancez un appel à l'action. « Alors, qu'en penses-tu ? On y va ? »"
          ],
          note: "En Section B, vous tutoyez souvent (« tu ») car l'interlocuteur est un ami ou un proche. Vérifiez la consigne : ami = tu, collègue/supérieur = vous."
        },
        {
          heading: "La règle d'or : un argument = un exemple",
          body: [
            "Un argument sans exemple reste abstrait et peu convaincant. La technique gagnante est simple : ARGUMENT (l'idée) + EXEMPLE (la preuve concrète).",
            "Exemple : « Le sport réduit le stress (argument). Tiens, la dernière fois qu'on a couru ensemble, tu as dormi comme un bébé le soir (exemple). »",
            "Sources d'exemples faciles à mobiliser : une expérience personnelle (« la dernière fois… »), un chiffre (« ça coûte deux fois moins cher »), une comparaison (« comme quand… »), un cas connu (« beaucoup de gens font déjà ça »).",
            "Astuce examen : préparez UN exemple par argument pendant vos 2 minutes de préparation. Trois arguments = trois exemples notés en mots-clés."
          ],
          note: "L'examinateur retient surtout les arguments ILLUSTRÉS. Un exemple concret vaut mieux que trois arguments vagues."
        },
        {
          heading: "Exprimer son opinion (et varier !)",
          body: [
            "À mon avis… / Selon moi… / D'après moi… / Personnellement, je trouve que…",
            "Je pense que… / Je crois que… / J'estime que… / Je suis convaincu(e) que… / J'ai la conviction que…",
            "Ce qui me semble important, c'est… / Il me paraît essentiel de… / Il est indéniable que…",
            "Répéter « je pense que » à chaque phrase appauvrit le discours. Faites tourner au moins quatre tournures différentes dans une même intervention."
          ]
        },
        {
          heading: "Les connecteurs logiques",
          body: [
            "Ajouter / ordonner : d'abord, ensuite, de plus, par ailleurs, en outre, enfin.",
            "Illustrer : par exemple, en effet, c'est le cas de, notamment, ainsi.",
            "Cause : parce que, car, puisque, étant donné que, en raison de.",
            "Conséquence : donc, c'est pourquoi, par conséquent, ainsi, du coup (familier).",
            "Conclure : en conclusion, pour toutes ces raisons, en somme, finalement, au fond."
          ],
          note: "Ne confondez pas cause et conséquence : « parce que » introduit la CAUSE, « c'est pourquoi » introduit la CONSÉQUENCE."
        }
      ],
      dialogue: {
        title: "Exemple — Convaincre un ami de partir en randonnée le week-end",
        lines: [
          { speaker: "Candidat", text: "Écoute, j'aimerais te convaincre de venir faire une randonnée ce week-end. Je pense que ce serait vraiment bénéfique pour nous deux." },
          { speaker: "Ami (examinateur)", text: "Bof, j'avais prévu de rester à la maison…" },
          { speaker: "Candidat", text: "Je comprends, mais écoute mes arguments. D'abord, on passe toute la semaine enfermés au bureau ; prendre l'air nous ferait un bien fou. Par exemple, la dernière fois, on s'est sentis beaucoup plus détendus après." },
          { speaker: "Ami (examinateur)", text: "C'est vrai que ça détend…" },
          { speaker: "Candidat", text: "Ensuite, c'est gratuit et bon pour la santé. Enfin, ce serait l'occasion de passer du temps ensemble. Alors, qu'en dis-tu, on y va ?" }
        ]
      },
      vocabulary: [
        { fr: "j'aimerais te convaincre de…", en: "I'd like to convince you to…" },
        { fr: "à mon avis / selon moi / d'après moi", en: "in my opinion" },
        { fr: "je suis convaincu(e) que", en: "I'm convinced that" },
        { fr: "il me paraît essentiel de…", en: "it seems essential to me to…" },
        { fr: "d'abord… ensuite… enfin", en: "first… then… finally" },
        { fr: "par exemple / notamment", en: "for example / in particular" },
        { fr: "c'est pourquoi / par conséquent", en: "that's why / consequently" },
        { fr: "qu'en penses-tu ? / qu'en dis-tu ?", en: "what do you think?" }
      ],
      quiz: [
        {
          type: "mcq",
          question: "Quel est le bon ordre pour structurer votre discours ?",
          options: [
            "Conclusion, arguments, introduction",
            "Introduction, arguments avec exemples, conclusion",
            "Arguments, introduction, exemples",
            "Exemples, conclusion, introduction"
          ],
          answer: 1,
          explanation: "On annonce son intention, on développe des arguments illustrés par des exemples, puis on conclut par un appel à l'action."
        },
        {
          type: "mcq",
          question: "Quel connecteur exprime une CONSÉQUENCE ?",
          options: ["par exemple", "c'est pourquoi", "d'abord", "cependant"],
          answer: 1,
          explanation: "« C'est pourquoi » introduit une conséquence. « Par exemple » illustre, « d'abord » ajoute, « cependant » oppose."
        },
        {
          type: "mcq",
          question: "Quel connecteur introduit une CAUSE ?",
          options: ["par conséquent", "puisque", "en conclusion", "ensuite"],
          answer: 1,
          explanation: "« Puisque » (comme « parce que », « car », « étant donné que ») introduit la cause. « Par conséquent » marque la conséquence."
        },
        {
          type: "mcq",
          question: "Pour éviter la répétition, par quoi remplacer « je pense que » ?",
          options: [
            "je pense que (encore)",
            "il me semble que / à mon avis / je suis convaincu(e) que",
            "peut-être",
            "je ne sais pas"
          ],
          answer: 1,
          explanation: "Varier les tournures d'opinion enrichit le discours et montre l'étendue du vocabulaire."
        },
        {
          type: "mcq",
          question: "Selon la « règle d'or » de la Classe, un bon argument doit toujours être accompagné :",
          options: [
            "d'une question",
            "d'un exemple concret",
            "d'une excuse",
            "d'un changement de sujet"
          ],
          answer: 1,
          explanation: "Un argument = un exemple. L'exemple concret (expérience, chiffre, comparaison) rend l'argument crédible et mémorable."
        },
        {
          type: "mcq",
          question: "Vous devez convaincre votre SUPÉRIEUR hiérarchique. Quel registre adoptez-vous ?",
          options: [
            "Le tutoiement (tu)",
            "Le vouvoiement (vous)",
            "Un mélange des deux",
            "Peu importe"
          ],
          answer: 1,
          explanation: "Avec un supérieur ou un inconnu, on vouvoie. On ne tutoie (tu) que si la consigne indique un ami ou un proche."
        },
        {
          type: "mcq",
          question: "Quelle phrase constitue le meilleur APPEL À L'ACTION pour conclure ?",
          options: [
            "Voilà, c'est tout ce que j'avais à dire.",
            "Alors, on essaie ce week-end, qu'en dis-tu ?",
            "Je ne sais pas si ça t'intéresse.",
            "Bon, je te laisse réfléchir tout seul."
          ],
          answer: 1,
          explanation: "Une conclusion efficace invite à agir maintenant et redonne la parole à l'interlocuteur : « on essaie… qu'en dis-tu ? »"
        },
        {
          type: "mcq",
          question: "Parmi ces enchaînements, lequel ordonne correctement trois arguments ?",
          options: [
            "Enfin… d'abord… ensuite…",
            "D'abord… ensuite… enfin…",
            "Ensuite… enfin… d'abord…",
            "De plus… d'abord… par ailleurs…"
          ],
          answer: 1,
          explanation: "L'ordre logique est « d'abord » (1er argument), « ensuite »/« de plus » (2e), « enfin » (dernier)."
        },
        {
          type: "open",
          question: "Sujet : Convaincre un ami de s'inscrire à un cours de français avec vous. Donnez une introduction et 2 arguments illustrés d'exemples.",
          model: "Introduction : « J'aimerais te convaincre de t'inscrire au cours de français avec moi, je suis sûr que tu ne le regretteras pas. » Argument 1 : « D'abord, apprendre à deux, c'est plus motivant : on pourra réviser ensemble. Par exemple, on se donnerait des devoirs mutuellement. » Argument 2 : « Ensuite, le français ouvre des portes au Canada, notamment pour l'emploi et l'immigration : un bon niveau peut rapporter des points à Entrée express. » Conclusion : « Alors, on s'inscrit ensemble ? »"
        },
        {
          type: "open",
          question: "Reformulez cette intervention pauvre en variant les tournures d'opinion : « Je pense que c'est bien. Je pense que c'est utile. Je pense que tu devrais essayer. »",
          model: "« À mon avis, c'est une excellente idée. D'ailleurs, il me paraît vraiment utile pour toi. Franchement, je suis convaincu que tu devrais essayer. » On a remplacé les trois « je pense que » par trois tournures différentes (à mon avis / il me paraît / je suis convaincu que)."
        },
        {
          type: "open",
          question: "Sujet : Convaincre un(e) collègue (vouvoiement) d'assister à une formation. Construisez une intro + 2 arguments + un exemple chacun + un appel à l'action.",
          model: "« J'aimerais vous convaincre de participer à cette formation avec moi. D'abord, elle nous permettrait de gagner en compétences : par exemple, on apprendrait à utiliser le nouveau logiciel plus vite que les autres équipes. Ensuite, c'est un vrai plus sur le CV, notamment pour une promotion : la direction valorise ceux qui se forment. Par conséquent, ce serait dommage de rater cette occasion. Qu'en dites-vous, on s'inscrit ensemble ? »"
        },
        {
          type: "open",
          question: "Entraînement express : donnez trois connecteurs pour AJOUTER un argument, trois pour ILLUSTRER, et trois pour CONCLURE.",
          model: "Ajouter : d'abord, ensuite, de plus (ou : par ailleurs, en outre, enfin). — Illustrer : par exemple, notamment, en effet (ou : ainsi, c'est le cas de). — Conclure : en conclusion, pour toutes ces raisons, en somme (ou : finalement, au fond)."
        }
      ]
    },

    /* ============================= CLASS 5 ============================= */
    {
      id: 5,
      title: "Section B — Persuasion avancée",
      subtitle: "Répondre aux objections et rester convaincant",
      duration: "≈ 75 min",
      objectives: [
        "Anticiper et traiter les objections de l'interlocuteur.",
        "Utiliser la concession pour renforcer son argument.",
        "Insister et reformuler sans se répéter.",
        "Proposer un compromis crédible pour débloquer la situation.",
        "Employer des exemples concrets et des tournures persuasives."
      ],
      lessons: [
        {
          heading: "Traiter les objections : la méthode ARC",
          body: [
            "En Section B, l'examinateur va résister : « Je n'ai pas le temps », « C'est trop cher », « Ça ne m'intéresse pas ». C'est NORMAL et même attendu. Ne vous découragez pas : rebondissez !",
            "Méthode ARC : A = Accueillir l'objection (« Je comprends que… »), R = Retourner ou Répondre (« mais justement… »), C = Convaincre avec un exemple ou un compromis.",
            "Exemple : « Je comprends que le temps te manque (Accueillir), mais justement, cette activité ne prend qu'une heure et te fera gagner en énergie (Retourner). On peut commencer par une seule séance pour voir (Compromis). »"
          ],
          note: "Ne dites jamais « d'accord, tant pis ». Un bon candidat continue à convaincre jusqu'à la fin de l'épreuve."
        },
        {
          heading: "La concession : reconnaître pour mieux convaincre",
          body: [
            "Concéder un point renforce votre crédibilité : « Certes, c'est un petit investissement, mais les bénéfices sont bien plus grands. »",
            "Structure clé : CONCESSION (je reconnais un point) + OPPOSITION (mais / cependant) + ARGUMENT FORT.",
            "Expressions utiles : « certes… mais », « je comprends que… cependant », « bien sûr… néanmoins », « il est vrai que… toutefois », « c'est possible… n'empêche que ».",
            "La structure « concession + argument fort » est très valorisée à l'examen : elle montre que vous écoutez l'autre au lieu de l'ignorer."
          ],
          note: "Attention à ne pas trop concéder : une concession, puis un argument fort. Sinon vous donnez raison à l'objection !"
        },
        {
          heading: "Insister, impliquer et rassurer",
          body: [
            "Insister : « Crois-moi… », « Je t'assure que… », « Franchement, tu ne le regretteras pas. », « Fais-moi confiance. »",
            "Impliquer l'autre : « Imagine un peu… », « Tu te rends compte des avantages ? », « Mets-toi à ma place. »",
            "Rassurer : « Ne t'inquiète pas, je serai là. », « On peut essayer une seule fois, pour voir. », « Si ça ne te plaît pas, on arrête. »",
            "Appel final : « Fais-moi confiance, on tente le coup ? »"
          ]
        },
        {
          heading: "Le compromis : débloquer sans abandonner",
          body: [
            "Quand l'interlocuteur résiste fort, proposez un compromis : cela montre de la souplesse sans renoncer à convaincre.",
            "Formules : « On peut commencer petit : juste une fois. », « Et si on essayait une semaine, puis on décide ? », « Trouvons un terrain d'entente : … »",
            "Le compromis n'est PAS un abandon : c'est une stratégie pour obtenir un « oui » partiel qui ouvre la porte."
          ]
        }
      ],
      dialogue: {
        title: "Exemple — Convaincre un collègue de covoiturer (avec objections)",
        lines: [
          { speaker: "Candidat", text: "J'aimerais te proposer de faire du covoiturage avec moi pour aller au travail." },
          { speaker: "Collègue (examinateur)", text: "Hmm, je préfère être indépendant avec ma propre voiture." },
          { speaker: "Candidat", text: "Je comprends ton attachement à ton indépendance, mais réfléchis : on partagerait les frais d'essence, donc on économiserait tous les deux chaque mois." },
          { speaker: "Collègue (examinateur)", text: "Oui, mais si nos horaires ne correspondent pas ?" },
          { speaker: "Candidat", text: "Certes, il faut un peu s'organiser, mais on peut convenir d'un horaire commun. Et franchement, c'est aussi plus écologique, moins de voitures sur la route. Écoute, on essaie une semaine, et si ça ne marche pas, on arrête, d'accord ?" }
        ]
      },
      vocabulary: [
        { fr: "je comprends que…, mais…", en: "I understand that…, but…" },
        { fr: "certes… néanmoins / toutefois", en: "admittedly… nevertheless" },
        { fr: "il est vrai que… cependant", en: "it's true that… however" },
        { fr: "crois-moi / je t'assure", en: "believe me / I assure you" },
        { fr: "imagine un peu… / mets-toi à ma place", en: "just imagine… / put yourself in my shoes" },
        { fr: "on peut commencer petit / juste une fois", en: "we can start small / just once" },
        { fr: "trouvons un terrain d'entente", en: "let's find common ground" },
        { fr: "on tente le coup ? / tu ne le regretteras pas", en: "shall we give it a shot? / you won't regret it" }
      ],
      quiz: [
        {
          type: "mcq",
          question: "Votre interlocuteur dit « C'est trop cher ». Quelle est la meilleure réaction ?",
          options: [
            "D'accord, tant pis alors.",
            "Certes, il y a un coût, mais pense aux économies que tu feras sur le long terme.",
            "Non, ce n'est pas cher.",
            "Tu as raison."
          ],
          answer: 1,
          explanation: "On concède le point (« certes ») puis on le retourne avec un argument fort : c'est la technique de la concession."
        },
        {
          type: "mcq",
          question: "Dans la méthode ARC, que signifient les trois lettres ?",
          options: [
            "Argumenter, Répéter, Conclure",
            "Accueillir, Retourner/Répondre, Convaincre",
            "Attaquer, Résister, Céder",
            "Analyser, Réfléchir, Continuer"
          ],
          answer: 1,
          explanation: "ARC = Accueillir l'objection, la Retourner/y Répondre, puis Convaincre (exemple ou compromis)."
        },
        {
          type: "mcq",
          question: "Quelle expression sert à INSISTER de façon convaincante ?",
          options: [
            "peut-être bien",
            "je ne suis pas sûr",
            "crois-moi, tu ne le regretteras pas",
            "comme tu veux"
          ],
          answer: 2,
          explanation: "« Crois-moi, tu ne le regretteras pas » implique l'interlocuteur et renforce la persuasion."
        },
        {
          type: "mcq",
          question: "Quelle structure correspond à une bonne CONCESSION ?",
          options: [
            "Argument fort + argument fort",
            "Concession + « mais » + argument fort",
            "Objection + abandon",
            "Question + question"
          ],
          answer: 1,
          explanation: "Concession (« certes / il est vrai que… ») + opposition (« mais / cependant ») + argument fort. C'est la structure valorisée."
        },
        {
          type: "mcq",
          question: "Laquelle de ces expressions N'EST PAS une concession ?",
          options: [
            "Il est vrai que…",
            "Certes…",
            "Par conséquent…",
            "Je comprends que…"
          ],
          answer: 2,
          explanation: "« Par conséquent » exprime une conséquence, pas une concession. Les concessions : certes, il est vrai que, je comprends que…"
        },
        {
          type: "mcq",
          question: "Face aux objections répétées de l'examinateur, il faut :",
          options: [
            "abandonner poliment",
            "changer de sujet",
            "continuer à argumenter et proposer un compromis",
            "répéter exactement le même argument"
          ],
          answer: 2,
          explanation: "Les objections sont attendues : on continue à convaincre, on reformule et on propose un compromis (« essaie une fois »)."
        },
        {
          type: "mcq",
          question: "Quelle proposition est un bon COMPROMIS (et non un abandon) ?",
          options: [
            "Bon, laisse tomber, ce n'est pas grave.",
            "Et si on essayait juste une semaine, puis on décide ensemble ?",
            "Tu as raison, oublions ça.",
            "Fais comme tu veux, ça m'est égal."
          ],
          answer: 1,
          explanation: "Proposer un essai limité (« juste une semaine ») obtient un « oui » partiel sans renoncer à convaincre : c'est un vrai compromis."
        },
        {
          type: "open",
          question: "Sujet : Convaincre un ami de réduire son usage de la voiture. Il répond « Mais c'est tellement pratique ! ». Répondez avec une concession + un argument fort + un appel final.",
          model: "« Je comprends, c'est vrai que la voiture est pratique au quotidien. Cependant, si tu marchais ou prenais le vélo pour les petits trajets, tu ferais des économies et tu améliorerais ta santé, sans compter le bénéfice pour la planète. Franchement, essaie juste une semaine, tu verras la différence. On tente le coup ? »"
        },
        {
          type: "open",
          question: "Objection : « Je n'ai vraiment pas le temps. » Appliquez la méthode ARC (Accueillir + Retourner + Convaincre/compromis) pour y répondre.",
          model: "Accueillir : « Je comprends, entre le travail et la famille, ton emploi du temps est chargé. » Retourner : « Mais justement, cette activité ne dure que 30 minutes et te ferait gagner de l'énergie pour le reste de la journée. » Convaincre/compromis : « On peut commencer par une seule fois cette semaine, sans engagement. Si ça t'apporte quelque chose, on continue. D'accord ? »"
        },
        {
          type: "open",
          question: "Objection difficile : « Ça ne m'intéresse pas du tout. » Rebondissez sans vous vexer : accueillez, creusez la vraie raison, puis relancez.",
          model: "« Je comprends que ça ne t'attire pas au premier abord. Mais est-ce que c'est l'activité en elle-même qui te rebute, ou plutôt le fait de te lancer ? Parce que beaucoup de gens pensaient comme toi et ont finalement adoré. Imagine un peu : tu pourrais découvrir quelque chose de nouveau, rencontrer du monde… Laisse-moi te montrer, une fois seulement, et tu jugeras par toi-même. »"
        },
        {
          type: "open",
          question: "Enchaînez trois objections/réponses : votre interlocuteur dit successivement « C'est cher », « C'est loin », « Je ne connais personne ». Répondez à chacune par une concession + un argument.",
          model: "1) « Certes, il y a un coût, mais réparti sur le mois, ça revient à quelques euros par séance, moins qu'un café par jour. » 2) « Il est vrai que ce n'est pas la porte à côté, cependant on peut y aller ensemble en covoiturage, ce sera même plus convivial. » 3) « Je comprends que tu ne connaisses personne, mais justement c'est l'occasion de te faire de nouveaux amis, et je serai là avec toi au début. Alors, on s'inscrit ? »"
        }
      ]
    },

    /* ============================= CLASS 6 ============================= */
    {
      id: 6,
      title: "Section B — Argumentation thématique",
      subtitle: "Banque d'arguments par thème et vocabulaire ciblé",
      duration: "≈ 80 min",
      objectives: [
        "Constituer une banque d'arguments réutilisables par grands thèmes.",
        "Mobiliser un vocabulaire thématique précis (santé, environnement, travail, technologie, société).",
        "Nuancer et pondérer son propos (pas seulement pour / contre).",
        "Adapter rapidement des arguments génériques à un sujet précis."
      ],
      lessons: [
        {
          heading: "La banque d'arguments : penser par catégories",
          body: [
            "La plupart des sujets de Section B tournent autour de bénéfices récurrents. Mémorisez des « familles d'arguments » que vous pourrez adapter à presque tout : l'ARGENT (économiser, rentabiliser), la SANTÉ (physique et mentale), le TEMPS (gagner du temps, l'organisation), le SOCIAL (les liens, la convivialité), l'ENVIRONNEMENT (écologie, durabilité) et le DÉVELOPPEMENT personnel (apprendre, progresser).",
            "Pour n'importe quel sujet, passez ces six familles en revue pendant la préparation : lesquelles s'appliquent ? Vous trouverez toujours 3 arguments solides.",
            "Exemple : convaincre de cuisiner à la maison → ARGENT (moins cher qu'au restaurant), SANTÉ (on contrôle ce qu'on mange), SOCIAL (cuisiner ensemble crée des moments)."
          ],
          note: "Cette grille des 6 familles (argent, santé, temps, social, environnement, développement) fonctionne pour presque tous les sujets. Apprenez-la par cœur."
        },
        {
          heading: "Le vocabulaire thématique",
          body: [
            "Santé / bien-être : le bien-être, réduire le stress, une bonne hygiène de vie, prévenir les maladies, l'équilibre, se ressourcer.",
            "Environnement : réduire son empreinte carbone, le gaspillage, les déchets, le développement durable, préserver la planète, l'énergie renouvelable.",
            "Travail / études : les compétences, la productivité, une promotion, l'équilibre vie pro / vie perso, le télétravail, se former.",
            "Technologie : gagner du temps, rester connecté, l'addiction aux écrans, la vie privée, les réseaux sociaux, se déconnecter.",
            "Société / vie sociale : le lien social, la solidarité, l'entraide, le vivre-ensemble, s'ouvrir aux autres."
          ]
        },
        {
          heading: "Nuancer et pondérer",
          body: [
            "Un bon orateur ne dit pas seulement « c'est bien » ou « c'est mal » : il nuance. Cela donne de la maturité au discours.",
            "Nuancer : « dans une certaine mesure », « en partie », « cela dépend de… », « à condition que… », « tout dépend du contexte ».",
            "Pondérer un avantage : « c'est utile, à condition de ne pas en abuser » ; « les écrans sont pratiques, mais avec modération ».",
            "Le subjonctif après « à condition que », « bien que », « pour que » : « à condition qu'on fasse attention », « bien que ce soit un effort »."
          ],
          note: "Nuancer ≠ hésiter. On affirme une position claire, puis on la précise. Un propos nuancé impressionne davantage qu'un avis tranché et simpliste."
        }
      ],
      dialogue: {
        title: "Exemple — Convaincre un ami de réduire ses déchets plastiques",
        lines: [
          { speaker: "Candidat", text: "J'aimerais te convaincre de réduire ton usage du plastique jetable. Franchement, c'est un petit geste qui change beaucoup." },
          { speaker: "Ami (examinateur)", text: "Oui mais bon, le plastique c'est tellement pratique…" },
          { speaker: "Candidat", text: "Il est vrai que c'est pratique sur le moment. Cependant, pense à l'environnement : une gourde réutilisable évite des centaines de bouteilles par an. Et côté argent, tu rentabilises l'achat en deux mois." },
          { speaker: "Ami (examinateur)", text: "Deux mois seulement ? Je ne savais pas." },
          { speaker: "Candidat", text: "Exactement. Et pour la santé, tu évites certains produits chimiques des plastiques. On peut commencer petit : juste une gourde et un sac en tissu. Tu me suis ?" }
        ]
      },
      vocabulary: [
        { fr: "réduire son empreinte carbone", en: "to reduce one's carbon footprint" },
        { fr: "le gaspillage / les déchets", en: "waste / trash" },
        { fr: "une bonne hygiène de vie", en: "a healthy lifestyle" },
        { fr: "réduire le stress / se ressourcer", en: "to reduce stress / to recharge" },
        { fr: "l'équilibre vie pro / vie perso", en: "work–life balance" },
        { fr: "l'addiction aux écrans / se déconnecter", en: "screen addiction / to disconnect" },
        { fr: "le lien social / l'entraide", en: "social bond / mutual help" },
        { fr: "à condition que (+ subjonctif)", en: "provided that / on condition that" },
        { fr: "dans une certaine mesure", en: "to a certain extent" }
      ],
      quiz: [
        {
          type: "mcq",
          question: "Vous devez convaincre quelqu'un de faire du vélo pour aller travailler. Quelle famille d'arguments N'EST PAS pertinente ici ?",
          options: [
            "La santé (activité physique)",
            "L'argent (économie d'essence)",
            "L'environnement (moins de pollution)",
            "Le luxe et le prestige social"
          ],
          answer: 3,
          explanation: "Le vélo se défend par la santé, l'argent, l'environnement et le temps (éviter les embouteillages), pas par le luxe/prestige."
        },
        {
          type: "mcq",
          question: "Quel mot appartient au champ lexical de l'ENVIRONNEMENT ?",
          options: ["une promotion", "l'empreinte carbone", "le bien-être", "une compétence"],
          answer: 1,
          explanation: "« L'empreinte carbone » relève de l'environnement. Promotion/compétence = travail ; bien-être = santé."
        },
        {
          type: "mcq",
          question: "Quelle expression permet de NUANCER un propos ?",
          options: [
            "c'est totalement faux",
            "dans une certaine mesure",
            "c'est évident",
            "toujours et partout"
          ],
          answer: 1,
          explanation: "« Dans une certaine mesure » nuance et montre de la maturité, contrairement aux formules tranchées et absolues."
        },
        {
          type: "mcq",
          question: "Après « à condition que », quel mode utilise-t-on ?",
          options: [
            "l'indicatif : « à condition qu'on fait attention »",
            "le subjonctif : « à condition qu'on fasse attention »",
            "le conditionnel : « à condition qu'on ferait attention »",
            "l'infinitif : « à condition qu'on faire attention »"
          ],
          answer: 1,
          explanation: "« À condition que », « bien que », « pour que » entraînent le subjonctif : « qu'on fasse », « que ce soit »."
        },
        {
          type: "mcq",
          question: "Sujet : cuisiner à la maison plutôt qu'au restaurant. Quel argument relève de la famille SANTÉ ?",
          options: [
            "On dépense moins d'argent.",
            "On contrôle les ingrédients et on mange plus équilibré.",
            "On gagne du temps.",
            "C'est plus prestigieux."
          ],
          answer: 1,
          explanation: "Contrôler les ingrédients pour manger équilibré relève de la santé. « Moins d'argent » = famille argent."
        },
        {
          type: "mcq",
          question: "Quel mot appartient au thème de la TECHNOLOGIE / des écrans ?",
          options: ["le développement durable", "l'addiction aux écrans", "l'entraide", "une hygiène de vie"],
          answer: 1,
          explanation: "« L'addiction aux écrans » relève de la technologie. Les autres appartiennent à l'environnement, au social et à la santé."
        },
        {
          type: "mcq",
          question: "Quelle phrase PONDÈRE correctement un avantage ?",
          options: [
            "Les écrans sont toujours mauvais.",
            "Les écrans sont pratiques, à condition de ne pas en abuser.",
            "Les écrans, c'est génial, sans exception.",
            "Il ne faut jamais utiliser d'écran."
          ],
          answer: 1,
          explanation: "Pondérer = reconnaître l'avantage tout en posant une limite (« à condition de ne pas en abuser »). C'est plus mûr qu'un avis absolu."
        },
        {
          type: "open",
          question: "Passez en revue les 6 familles d'arguments (argent, santé, temps, social, environnement, développement) pour le sujet : « Convaincre un ami de faire du bénévolat. » Donnez un argument par famille pertinente.",
          model: "Social : « Tu rencontreras des gens formidables et tu créeras du lien. » Développement personnel : « Tu développeras de nouvelles compétences, utiles même sur un CV. » Santé (mentale) : « Aider les autres procure un vrai sentiment de bien-être et réduit le stress. » Société : « Tu contribues à une cause qui te tient à cœur, c'est valorisant. » (Argent et temps sont moins pertinents ici — on les écarte, ce qui montre qu'on sait sélectionner.)"
        },
        {
          type: "open",
          question: "Sujet thématique — ENVIRONNEMENT : Convaincre un(e) colocataire de trier les déchets. Donnez une intro + 2 arguments illustrés + une nuance.",
          model: "« J'aimerais qu'on se mette à trier nos déchets tous les deux. D'abord, pour l'environnement : le recyclage évite que des tonnes de plastique finissent dans la nature — un seul foyer peut réduire ses déchets de moitié. Ensuite, c'est même pratique : avec deux poubelles séparées, on s'y retrouve vite. Bien sûr, ça demande un petit effort au début, mais une fois l'habitude prise, ça devient automatique. On essaie ce mois-ci ? »"
        },
        {
          type: "open",
          question: "Sujet thématique — TRAVAIL : Convaincre votre supérieur (vouvoiement) d'autoriser deux jours de télétravail par semaine. Utilisez la famille « équilibre » et « productivité ».",
          model: "« J'aimerais vous proposer deux jours de télétravail par semaine. D'abord, pour la productivité : sans les trajets ni les interruptions, je pourrais me concentrer davantage sur les tâches de fond — j'ai remarqué que je suis plus efficace au calme. Ensuite, pour l'équilibre vie pro / vie perso : un meilleur équilibre, c'est un employé plus motivé et moins fatigué sur le long terme. Je resterais évidemment joignable et je viendrais au bureau pour toutes les réunions importantes. Qu'en pensez-vous, pourrait-on tester la formule un mois ? »"
        },
        {
          type: "open",
          question: "Sujet thématique — SANTÉ/TECHNOLOGIE : Convaincre un ami de limiter son temps d'écran le soir. Intégrez une nuance et un compromis.",
          model: "« Je te propose de couper les écrans une heure avant de dormir. D'abord, pour la santé : la lumière bleue perturbe le sommeil, et un bon sommeil, c'est plus d'énergie le lendemain. Ensuite, ça libère du temps pour autre chose : lire, discuter, se détendre. Attention, je ne te dis pas de supprimer ton téléphone — les écrans sont utiles, à condition de ne pas en abuser. On peut commencer petit : juste 30 minutes sans écran avant de te coucher, cette semaine. Tu tentes ? »"
        }
      ]
    },

    /* ============================= CLASS 7 ============================= */
    {
      id: 7,
      title: "Grammaire, connecteurs et aisance à l'oral",
      subtitle: "Les outils qui font gagner des points : temps, liaisons, fluidité",
      duration: "≈ 80 min",
      objectives: [
        "Maîtriser les temps clés de l'oral : conditionnel de politesse et subjonctif courant.",
        "Utiliser une boîte à outils complète de connecteurs logiques.",
        "Soigner la prononciation, les liaisons et le rythme.",
        "Gérer les hésitations et gagner du temps sans silence gênant."
      ],
      lessons: [
        {
          heading: "Les temps qui font la différence",
          body: [
            "Le CONDITIONNEL DE POLITESSE adoucit et valorise : « je voudrais », « pourriez-vous », « ce serait », « j'aimerais ». En Section A comme en B, il rend le discours plus élégant.",
            "Le conditionnel sert aussi à imaginer : « Si on faisait ça, on économiserait… » (si + imparfait, puis conditionnel). C'est très utile pour convaincre : « Imagine, ce serait tellement plus simple ! »",
            "Le SUBJONCTIF apparaît après certaines expressions courantes : « il faut que… », « je veux que… », « pour que… », « bien que… », « à condition que… », « avant que… ». Formes fréquentes à connaître : que je fasse, que ce soit, que j'aille, que tu aies, que nous puissions.",
            "Exemple : « Il faut que tu viennes », « pour que ce soit clair », « bien que ce soit un effort »."
          ],
          note: "Vous n'avez pas besoin de tout maîtriser : sécurisez une dizaine de formes fréquentes au subjonctif (fasse, soit, aille, ait, puisse, vienne) et le conditionnel de politesse. Cela suffit à impressionner."
        },
        {
          heading: "La boîte à outils des connecteurs",
          body: [
            "Ordonner : d'abord, ensuite, puis, enfin, en premier lieu, en dernier lieu.",
            "Ajouter : de plus, en outre, par ailleurs, non seulement… mais aussi.",
            "Opposer / concéder : mais, cependant, pourtant, néanmoins, toutefois, en revanche, certes… mais.",
            "Cause : parce que, car, puisque, étant donné que, grâce à (positif), à cause de (négatif).",
            "Conséquence : donc, alors, par conséquent, c'est pourquoi, si bien que.",
            "Illustrer : par exemple, notamment, en effet, ainsi.",
            "Conclure : en conclusion, pour résumer, en somme, finalement, tout compte fait."
          ],
          note: "Un piège fréquent : « grâce à » est POSITIF (grâce à toi = merci à toi) ; « à cause de » est NÉGATIF (à cause du bruit)."
        },
        {
          heading: "Prononciation, liaisons et rythme",
          body: [
            "Les LIAISONS obligatoires : « les_amis », « un_enfant », « nous_avons », « très_important », « c'est_utile ». Enchaînez la consonne finale avec la voyelle suivante.",
            "Attention aux liaisons interdites : pas de liaison après « et » (« et // ensuite »), ni entre un nom singulier et le verbe.",
            "Le rythme du français : on accentue la DERNIÈRE syllabe d'un groupe de mots. Parlez par groupes de sens, avec une petite montée puis une descente à la fin de la phrase.",
            "Articulez les sons difficiles : le « u » (tu, sur, une) ≠ « ou » (tout, sous) ; le « r » français ; les nasales (an/on/in). Entraînez-vous à voix haute et enregistrez-vous."
          ]
        },
        {
          heading: "L'aisance : gérer l'hésitation",
          body: [
            "Gagnez du temps sans silence gênant avec des amorces naturelles : « Alors… », « Eh bien… », « Voyons voir… », « Comment dire… », « C'est une bonne question. »",
            "Pour reformuler quand un mot manque : « c'est-à-dire… », « en fait, ce que je veux dire, c'est… », « disons que… ».",
            "Ne vous corrigez pas dix fois : si vous faites une petite erreur, continuez. La fluidité compte autant que la correction.",
            "Respirez et ralentissez : un débit posé est plus clair, plus convaincant, et vous laisse le temps de penser à la suite."
          ],
          note: "Les amorces (« alors… », « eh bien… ») sont vos alliées : elles remplacent les « euh » et donnent une impression de contrôle et de naturel."
        }
      ],
      dialogue: {
        title: "Exemple — Repérer les outils dans une intervention",
        lines: [
          { speaker: "Amorce", text: "« Alors, écoute… » → gagner du temps naturellement au démarrage." },
          { speaker: "Conditionnel", text: "« Ce serait vraiment bien pour toi. » → politesse et projection." },
          { speaker: "Connecteur", text: "« D'abord… ensuite… par conséquent… » → structurer le propos." },
          { speaker: "Subjonctif", text: "« Il faut vraiment que tu essaies, pour que tu puisses juger. » → obligation + but." },
          { speaker: "Liaison", text: "« C'est_un très_important avantage. » → enchaîner les sons." }
        ]
      },
      vocabulary: [
        { fr: "je voudrais / j'aimerais / ce serait", en: "I would like / it would be" },
        { fr: "il faut que + subjonctif", en: "it is necessary that…" },
        { fr: "pour que / bien que + subjonctif", en: "so that / although" },
        { fr: "grâce à (positif) ≠ à cause de (négatif)", en: "thanks to ≠ because of" },
        { fr: "non seulement… mais aussi", en: "not only… but also" },
        { fr: "Alors… / Eh bien… / Voyons voir…", en: "So… / Well… / Let's see…" },
        { fr: "c'est-à-dire… / disons que…", en: "that is to say… / let's say…" },
        { fr: "comment dire…", en: "how shall I put it…" }
      ],
      quiz: [
        {
          type: "mcq",
          question: "Quelle phrase emploie correctement le conditionnel de politesse ?",
          options: [
            "Je veux que vous me donnez le prix.",
            "Je voudrais connaître le prix, s'il vous plaît.",
            "Donne le prix.",
            "Vous devez me dire le prix."
          ],
          answer: 1,
          explanation: "« Je voudrais » est le conditionnel de politesse : il adoucit la demande, contrairement à « je veux » ou à l'impératif sec."
        },
        {
          type: "mcq",
          question: "Complétez au subjonctif : « Il faut que tu ______ à la réunion. »",
          options: ["vas", "vais", "ailles", "irais"],
          answer: 2,
          explanation: "Après « il faut que », on emploie le subjonctif : « que tu ailles ». « Vas » est l'indicatif, « irais » le conditionnel."
        },
        {
          type: "mcq",
          question: "Complétez : « Bien que ce ______ un effort, ça en vaut la peine. »",
          options: ["est", "soit", "serait", "sera"],
          answer: 1,
          explanation: "« Bien que » entraîne le subjonctif : « bien que ce soit ». (« est » = indicatif, incorrect ici.)"
        },
        {
          type: "mcq",
          question: "Quelle phrase exprime une CAUSE de manière POSITIVE ?",
          options: [
            "Je suis en retard à cause de toi.",
            "J'ai réussi grâce à ton aide.",
            "C'est fermé à cause de la grève.",
            "J'ai échoué à cause du stress."
          ],
          answer: 1,
          explanation: "« Grâce à » introduit une cause positive (une aide, un bienfait). « À cause de » introduit une cause négative."
        },
        {
          type: "mcq",
          question: "Dans quelle phrase la liaison est-elle OBLIGATOIRE ?",
          options: [
            "et / ensuite",
            "nous_avons",
            "un garçon / intelligent",
            "il parle / et écoute"
          ],
          answer: 1,
          explanation: "« Nous avons » → liaison obligatoire (« nous‿avons »). Après « et », la liaison est interdite."
        },
        {
          type: "mcq",
          question: "Quel connecteur marque l'OPPOSITION / la concession ?",
          options: ["par conséquent", "néanmoins", "en effet", "d'abord"],
          answer: 1,
          explanation: "« Néanmoins » (comme « cependant », « toutefois », « pourtant ») marque l'opposition/concession."
        },
        {
          type: "mcq",
          question: "Vous cherchez un mot et voulez éviter un silence. Quelle amorce est la plus naturelle ?",
          options: [
            "(silence complet)",
            "Euh… euh… euh…",
            "Alors, comment dire… ce que je veux dire, c'est…",
            "Je ne sais pas, tant pis."
          ],
          answer: 2,
          explanation: "Les amorces (« alors, comment dire… », « ce que je veux dire, c'est… ») comblent l'hésitation avec naturel et fluidité."
        },
        {
          type: "mcq",
          question: "Sur quelle syllabe porte l'accent en français, à la fin d'un groupe de mots ?",
          options: [
            "la première syllabe",
            "la syllabe du milieu",
            "la dernière syllabe",
            "toutes également"
          ],
          answer: 2,
          explanation: "En français, l'accent tombe sur la dernière syllabe du groupe rythmique (« un caFÉ », « c'est très imporTANT »)."
        },
        {
          type: "open",
          question: "Transformez ces ordres secs en demandes polies (conditionnel) : 1) « Donnez-moi le tarif. » 2) « Je veux visiter l'appartement. » 3) « Dites-moi les horaires. »",
          model: "1) « Pourriez-vous me donner le tarif, s'il vous plaît ? » 2) « Je voudrais / j'aimerais visiter l'appartement, serait-ce possible ? » 3) « Pourriez-vous me préciser les horaires ? » Le conditionnel (« pourriez-vous », « je voudrais », « serait-ce ») rend chaque demande polie et adaptée à l'examen."
        },
        {
          type: "open",
          question: "Conjuguez au subjonctif après « il faut que… » : (faire) tu, (être) ce, (avoir) nous, (pouvoir) je, (venir) ils.",
          model: "Il faut que tu FASSES ; il faut que ce SOIT ; il faut que nous AYONS ; il faut que je PUISSE ; il faut qu'ils VIENNENT. Ce sont les formes irrégulières les plus fréquentes à l'oral — mémorisez-les."
        },
        {
          type: "open",
          question: "Reliez ces idées avec des connecteurs variés (au moins 4 différents) : « Le vélo est bon pour la santé. Il est économique. Il faut du courage au début. Je te conseille d'essayer. »",
          model: "« D'abord, le vélo est excellent pour la santé. De plus, il est très économique : plus d'essence à payer. Certes, il faut un peu de courage au début, mais on s'y habitue vite. Par conséquent, je te conseille vraiment d'essayer. » On a employé : d'abord, de plus, certes… mais, par conséquent."
        },
        {
          type: "open",
          question: "Lisez cette phrase à voix haute en soignant les liaisons, puis notez où elles se font : « C'est un très important avantage pour vous et vos enfants. »",
          model: "Liaisons à réaliser : « C'est‿un » (t–un), « très‿important » (s–im), « vos‿enfants » (s–en). Pas de liaison après « et » : « … pour vous / et / vos enfants ». Entraînez-vous en enchaînant la consonne finale avec la voyelle suivante, sans marquer de pause."
        }
      ]
    },

    /* ============================= CLASS 8 ============================= */
    {
      id: 8,
      title: "Examen blanc & conseils finaux",
      subtitle: "Mises en situation complètes et derniers réflexes",
      duration: "≈ 90 min",
      objectives: [
        "Réaliser plusieurs examens blancs complets (Section A + Section B).",
        "Gérer le temps de préparation et de passation en conditions réelles.",
        "Identifier et éviter les erreurs les plus fréquentes.",
        "Adopter la check-list finale et les bons réflexes le jour de l'examen."
      ],
      lessons: [
        {
          heading: "Examen blanc 1 — Section A (natation)",
          body: [
            "Annonce : « COURS DE NATATION pour adultes — Piscine municipale. Débutants et intermédiaires bienvenus. Inscriptions ouvertes. »",
            "Consigne : Vous téléphonez pour obtenir un maximum d'informations. Préparez vos questions (2 minutes), puis « jouez » l'appel à voix haute pendant environ 5 minutes.",
            "Pensez à couvrir : horaires, prix, niveau requis, matériel, lieu/accès, inscription."
          ],
          note: "Chronométrez-vous ! Le jour J, la gestion du temps fait la différence."
        },
        {
          heading: "Examen blanc 2 — Section A (offre d'emploi)",
          body: [
            "Annonce : « RECHERCHE ASSISTANT(E) ADMINISTRATIF(VE) — Temps partiel. Débutant accepté, formation assurée. »",
            "Consigne : Vous appelez l'employeur pour tout savoir sur le poste. Préparez (2 min), puis menez l'appel (≈ 5 min) en variant vos formes de questions.",
            "Couvrez : horaires et jours, salaire, missions exactes, expérience/diplôme requis, lieu, procédure de candidature."
          ]
        },
        {
          heading: "Examen blanc 3 — Section B (salle de sport)",
          body: [
            "Document : « Une salle de sport vient d'ouvrir près de chez vous. Abonnement mensuel avantageux. »",
            "Consigne : Convainquez un(e) ami(e) de s'y inscrire avec vous. Préparez (2 minutes), puis argumentez pendant environ 10 minutes en répondant aux objections.",
            "Structure : introduction → 3 arguments illustrés (santé, argent/motivation, social) → réponses aux objections (temps, coût) → conclusion avec appel à l'action."
          ]
        },
        {
          heading: "Examen blanc 4 — Section B (voyage / activité)",
          body: [
            "Document : « Week-end de randonnée en montagne organisé le mois prochain. Places limitées. »",
            "Consigne : Convainquez un(e) proche de vous accompagner. Préparez (2 min), argumentez (≈ 10 min) et traitez au moins deux objections (fatigue, budget).",
            "Rappel : concession + argument fort, un exemple par argument, et un compromis si ça bloque (« viens juste pour la journée »)."
          ]
        },
        {
          heading: "Les erreurs les plus fréquentes",
          body: [
            "Confondre les tâches : poser des questions en Section B, ou donner son avis en Section A.",
            "S'arrêter trop tôt : ne pas remplir le temps imparti (parlez jusqu'au bout !).",
            "Rester monotone : varier l'intonation et montrer de l'enthousiasme, surtout en Section B.",
            "Négliger l'ouverture et la clôture : toujours saluer, remercier, conclure poliment.",
            "Abandonner face aux objections : continuez à convaincre.",
            "Oublier d'illustrer : un argument sans exemple concret pèse peu."
          ]
        },
        {
          heading: "La check-list finale du jour J",
          body: [
            "① Je lis la consigne et j'identifie la tâche : Section A (questions) ou Section B (convaincre) ?",
            "② J'utilise mes 2 minutes de préparation : mots-clés, pas de phrases rédigées.",
            "③ Je vouvoie un inconnu / je tutoie un ami — selon la consigne.",
            "④ J'ouvre poliment et je clôture par un remerciement / un appel à l'action.",
            "⑤ Je varie mes tournures, mes connecteurs et mes formes de questions.",
            "⑥ Je parle jusqu'au bout du temps imparti, sans jamais abandonner.",
            "⑦ Je respire, je ralentis, j'articule."
          ],
          note: "Relisez cette check-list la veille de l'examen. Ce sont les sept réflexes qui font gagner le plus de points."
        }
      ],
      dialogue: {
        title: "Rappel express — les 5 réflexes gagnants",
        lines: [
          { speaker: "Réflexe 1", text: "Je lis la consigne : est-ce Section A (questions) ou Section B (convaincre) ?" },
          { speaker: "Réflexe 2", text: "Je vouvoie un inconnu, je tutoie un ami — selon la consigne." },
          { speaker: "Réflexe 3", text: "J'ouvre poliment et je clôture par un remerciement." },
          { speaker: "Réflexe 4", text: "Je varie mes tournures et mes connecteurs, et j'illustre chaque argument." },
          { speaker: "Réflexe 5", text: "Je parle jusqu'au bout du temps imparti, sans abandonner." }
        ]
      },
      vocabulary: [
        { fr: "Alors… / Eh bien… / Voyons voir…", en: "So… / Well… / Let's see… (fillers)" },
        { fr: "C'est une bonne question.", en: "That's a good question." },
        { fr: "le temps imparti", en: "the allotted time" },
        { fr: "gérer son temps", en: "to manage one's time" },
        { fr: "s'entraîner à voix haute", en: "to practise out loud" },
        { fr: "un débit posé", en: "a steady/calm pace of speech" },
        { fr: "en conditions réelles", en: "under real conditions" }
      ],
      quiz: [
        {
          type: "mcq",
          question: "Quelle est l'erreur la plus grave à l'examen ?",
          options: [
            "Faire une petite faute de grammaire",
            "Confondre la tâche : donner son avis en Section A au lieu de poser des questions",
            "Utiliser « est-ce que »",
            "Marquer une courte pause"
          ],
          answer: 1,
          explanation: "Se tromper de tâche fait perdre énormément de points : Section A = questions, Section B = convaincre."
        },
        {
          type: "mcq",
          question: "Que faire quand il vous reste du temps et que vous ne savez plus quoi dire ?",
          options: [
            "Se taire jusqu'à la fin",
            "Dire « j'ai fini »",
            "Poser une question de plus (A) ou ajouter un argument/exemple (B)",
            "Répéter mot pour mot ce qui a déjà été dit"
          ],
          answer: 2,
          explanation: "Utilisez tout le temps imparti : une question supplémentaire en A, un argument ou un exemple en B."
        },
        {
          type: "mcq",
          question: "Pour améliorer l'aisance, quel réflexe est utile ?",
          options: [
            "Parler le plus vite possible",
            "Utiliser des mots de remplissage naturels (« alors… », « eh bien… ») et respirer",
            "Faire de longues phrases très complexes",
            "Éviter complètement de faire des pauses"
          ],
          answer: 1,
          explanation: "Des amorces naturelles et une respiration posée donnent de la fluidité, mieux que la précipitation."
        },
        {
          type: "mcq",
          question: "Comment utiliser au mieux les 2 minutes de préparation ?",
          options: [
            "Rédiger tout mon discours mot à mot",
            "Noter des mots-clés et sélectionner 3 arguments (ou une grille de questions)",
            "Ne rien noter, improviser entièrement",
            "Mémoriser un texte appris par cœur"
          ],
          answer: 1,
          explanation: "On note des mots-clés (arguments/exemples en B ; catégories de questions en A), pas des phrases rédigées : cela garde le discours naturel."
        },
        {
          type: "mcq",
          question: "En Section B, un argument est vraiment convaincant quand il est :",
          options: [
            "long et compliqué",
            "accompagné d'un exemple concret",
            "répété plusieurs fois",
            "posé sous forme de question"
          ],
          answer: 1,
          explanation: "Argument + exemple concret = la règle d'or. L'exemple rend l'argument crédible et mémorable pour l'examinateur."
        },
        {
          type: "open",
          question: "Examen blanc 1 — Section A (natation) : réalisez l'appel complet à voix haute, en 5 minutes chronométrées. Enregistrez-vous.",
          model: "Ouverture : « Bonjour, je vous appelle au sujet de votre annonce pour les cours de natation, j'aurais plusieurs questions. » Puis couvrez : horaires (« Quels sont les créneaux proposés ? »), prix (« Quel est le tarif mensuel ? Y a-t-il des réductions ? »), niveau (« Les cours sont-ils adaptés aux vrais débutants ? »), matériel (« Faut-il apporter son maillot et son bonnet ? »), lieu (« Comment accède-t-on à la piscine en transport en commun ? »), inscription (« Comment procède-t-on pour s'inscrire ? »). Clôture : « Je vous remercie pour toutes ces informations, je vais réfléchir et je vous recontacterai. Bonne journée ! » — Auto-évaluation : ai-je couvert 5–6 catégories ? ai-je varié mes formes de questions (intonation / est-ce que / inversion) ? ai-je bien ouvert et clôturé ?"
        },
        {
          type: "open",
          question: "Examen blanc 2 — Section A (assistant administratif) : menez l'appel en 5 minutes. Notez ensuite combien de catégories vous avez couvertes.",
          model: "Ouverture : « Bonjour, je vous appelle concernant votre annonce pour le poste d'assistant administratif, j'aurais quelques questions. » Missions : « En quoi consisteraient exactement les tâches quotidiennes ? » Horaires : « Quels seraient les jours et les horaires de travail ? » Salaire : « Pourriez-vous me préciser la rémunération proposée ? » Conditions : « Un diplôme ou une expérience sont-ils exigés ? » Lieu : « Où se situent vos bureaux, et sont-ils accessibles en transport ? » Candidature : « Comment dois-je procéder pour postuler, et sous quel délai ? » Clôture : « Je vous remercie beaucoup, je vous enverrai ma candidature rapidement. Bonne journée ! » — Objectif : 5 à 6 catégories, formes de questions variées."
        },
        {
          type: "open",
          question: "Examen blanc 3 — Section B (salle de sport) : argumentez 10 minutes pour convaincre un ami de s'inscrire. Traitez les objections « je n'ai pas le temps » et « c'est trop cher ».",
          model: "Intro : « J'aimerais te convaincre de t'inscrire à la nouvelle salle de sport avec moi. » Arg. 1 (santé) : « D'abord, c'est excellent pour la forme et le moral — après une séance, on se sent tout de suite mieux. » Arg. 2 (motivation/social) : « Ensuite, à deux, on se motive : on ira plus régulièrement. » Arg. 3 (argent) : « Enfin, l'abonnement est avantageux, moins cher qu'un café par jour. » Objection temps : « Je comprends que tu sois occupé, mais 30 minutes suffisent, et c'est juste à côté. » Objection coût : « Certes, il y a un abonnement, mais rapporté à la séance, ça ne coûte presque rien, et pense aux bénéfices pour ta santé. » Compromis + appel : « On peut commencer par un mois d'essai. On s'inscrit ensemble ce week-end ? »"
        },
        {
          type: "open",
          question: "Examen blanc 4 — Section B (week-end randonnée) : convainquez un proche de venir. Traitez les objections « je serai fatigué » et « ça coûte cher ».",
          model: "Intro : « J'aimerais vraiment que tu viennes à ce week-end de randonnée avec moi. » Arg. 1 (bien-être) : « D'abord, la montagne, c'est une bulle d'air : on déconnecte du stress, on revient reposés — la dernière fois, on avait adoré. » Arg. 2 (social) : « Ensuite, ce serait un super moment à passer ensemble, loin des écrans. » Objection fatigue : « Je comprends que tu craignes la fatigue, mais on adaptera le rythme, et l'air de la montagne fait un bien fou. » Objection budget : « Certes, il y a un petit coût, mais en partageant le transport et l'hébergement, ça revient à peu de choses. » Compromis + appel : « Et si tu venais juste pour la journée de samedi, pour voir ? Allez, on tente le coup ? »"
        },
        {
          type: "open",
          question: "Auto-évaluation finale : écoutez un de vos enregistrements et notez-vous (/5) sur chaque critère, puis fixez un objectif d'amélioration.",
          model: "Critères à noter : 1) Adéquation à la tâche (bonne section, consigne respectée) ; 2) Richesse (vocabulaire varié, connecteurs) ; 3) Correction grammaticale (temps, accords) ; 4) Aisance/fluidité (peu d'hésitations, débit posé) ; 5) Prononciation (liaisons, articulation). Exemple d'objectif : « Ma fluidité est à 3/5 : je vais m'entraîner 10 minutes par jour à voix haute avec des amorces (‘alors…', ‘eh bien…') pour supprimer les silences. » Refaites l'exercice après une semaine et comparez."
        }
      ]
    }
  ]
};

// Expose the data for the app (and allow module import if ever bundled).
if (typeof window !== "undefined") {
  window.COURSE = COURSE;
}
