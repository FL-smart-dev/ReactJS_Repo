import React from 'react';
import { Collapse } from 'antd';
import { capitalize, upperCase } from 'lodash';
import {faq} from "../../utils/AppStrings";
import SectionHeader from '../SectionHeader/SectionHeader';


const { Panel } = Collapse;

// Expanded FAQ content
const faqs = [
  {
    category: 'General Questions',
    questions: [
      {
        question: 'What is Cafe.bio?',
        answer: 'Cafe.bio is a digital platform aimed at helping coffee shops increase their revenue and customer foot traffic through custom offers, promotions, and cash back, integrated directly into POS systems.'
      },
      {
        question: 'How can Cafe.bio benefit my coffee shop?',
        answer: 'By using Cafe.bio, you can create enticing promotions that attract more customers, implement effective loyalty programs, and enhance your shop\'s visibility through social media integration, all of which contribute to increased sales and customer loyalty.'
      },
      {
        question: 'Is Cafe.bio suitable for all types of coffee shops?',
        answer: 'Absolutely! Cafe.bio is designed to cater to coffee shops of all sizes, from small independent cafes to larger chains. Our platform is customizable to fit your specific needs and goals.'
      },
      {
        question: 'How much does Cafe.bio cost?',
        answer: 'We offer various pricing plans to suit different business needs and budgets. For detailed pricing information, please visit our website or contact our sales team.'
      },
    ],
  },
  {
    category: 'Problems Addressed',
    questions: [
      {
        question: 'How does Cafe.bio tackle ineffective rewards programs?',
        answer: 'Cafe.bio enhances rewards programs by providing tools for easy creation, management, and tracking of offers that genuinely appeal to customers, ensuring these programs contribute positively to your revenue.'
      },
      {
        question: 'Can Cafe.bio help with my social media marketing?',
        answer: 'Yes, Cafe.bio transforms your social media profiles into powerful marketing tools by enabling direct posting of deals and promotions, which can significantly improve the outcomes of your social media advertising efforts.'
      },
      {
        question: 'What does Cafe.bio offer to improve customer retention?',
        answer: 'Our platform offers targeted promotions, loyalty programs, and cash back incentives that encourage customers to visit more frequently and increase their order sizes, boosting overall retention and sales.'
      },
    ],
  },
  {
    category: 'The Cafe.bio Solution',
    questions: [
      {
        question: 'How easy is it to integrate Cafe.bio with my existing POS system?',
        answer: 'Cafe.bio offers seamless integration with popular POS systems like Square and Toast, making it straightforward to link your sales data with our platform for efficient promotion management and tracking.'
      },
      {
        question: 'What types of promotions can I create with Cafe.bio?',
        answer: 'From time-sensitive offers to loyalty rewards, and surge deals to attract customers during slow times, Cafe.bio provides over 300 marketing campaign templates for a wide range of targeted promotions.'
      },
      {
        question: 'How does Cafe.bio\'s "Surge" deals work?',
        answer: 'Surge deals allow you to quickly create promotions intended to boost business during typically slow periods, helping to even out demand and increase revenue.'
      },
    ],
  },
  {
    category: 'Operational Details',
    questions: [
      {
        question: 'How do I track the performance of my promotions with Cafe.bio?',
        answer: 'Cafe.bio offers straightforward analytics tailored for busy coffee shop owners, allowing you to monitor the success of your promotions and adjust your strategies as needed.'
      },
      {
        question: 'Can I schedule promotions in advance with Cafe.bio?',
        answer: 'Yes, our platform enables you to schedule and monitor your promotions in advance, giving you the flexibility to plan your marketing efforts around your business\'s needs.'
      },
    ],
  },
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'How do I sign up for Cafe.bio?',
        answer: 'Signing up is easy! Just visit our website, click on the "Sign Up" button, and follow the instructions to get started. If you need any assistance, our support team is here to help.'
      },
      {
        question: 'What support does Cafe.bio offer to new users?',
        answer: 'We provide comprehensive support through our help center, email, and live chat. Our team is dedicated to helping you get the most out of Cafe.bio, from setup to ongoing operation.'
      },
    ],
  },
  {
    category: 'Cafe.bio vs. POS Systems',
    questions: [
      {
        question: 'How does Cafe.bio enhance the marketing capabilities of my POS system?',
        answer: 'Cafe.bio extends beyond basic marketing features in POS systems by offering AI-powered promotional tools, targeted marketing templates, and social media integration, turning posts into sales.'
      },
      {
        question: 'Can Cafe.bio work in tandem with Square and Toast\'s existing loyalty programs?',
        answer: 'Yes, Cafe.bio complements and enhances existing loyalty programs with deeper analytics and customizable promotions, tailoring incentives to customer behaviors more precisely.'
      },
      {
        question: 'What makes Cafe.bio\'s analytics superior to those in Square and Toast?',
        answer: 'Cafe.bio focuses on marketing campaign performance and customer engagement metrics, offering insights into promotion redemption rates and ROI, enabling more data-driven decisions.'
      },
      {
        question: 'How does Cafe.bio improve upon customer engagement tools provided by POS systems?',
        answer: 'Cafe.bio offers specific engagement tools like surge pricing, time-sensitive deals, and cashback incentives, designed to increase foot traffic and enhance loyalty.'
      },
      {
        question: 'Is Cafe.bio\'s integration with social media platforms more effective than POS-generated QR codes for promotions?',
        answer: 'Yes, Cafe.bio\'s direct promotion through social media links provides a smoother customer journey and more effective tracking of social media marketing efforts than QR codes.'
      },
    ],
  }
];

const FAQSection = () => (
    <div id='faq' style={{maxWidth:'80%',margin:'auto'}}>
    <SectionHeader title={faq.header} subtitle={faq.subtitle} />
    <Collapse accordion style={{backgroundColor:'#fff', border:'0px'}}>
      {faqs.map((faq, index) =>
        faq.questions.map((q, qIndex) => (
          <Panel header={`Q: ${q.question}`} style={{fontFamily:'geologica-medium',color:'#03403c', fontSize:'0.94175rem'}} key={`${index}-${qIndex}`}>
            <p style={{fontFamily:'geologica-regular',color:'#090909', fontSize:'0.875rem'}}>A: {q.answer}</p>
          </Panel>
        ))
      )}
    </Collapse>
  </div>
);

export default FAQSection;
