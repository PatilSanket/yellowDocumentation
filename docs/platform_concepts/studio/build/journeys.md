---
title: Getting started with flows
sidebar_label: Flow
---

> The words **Flows** and **Journeys** are used synonymously.

In this article, you will learn: 

1. [Home flow- how a bot works](#home)
2. [How to create a flow](#createflow)
3. [Workflow- a variation of flow](#workflow)
4. [How to trigger a flow?](#triggerflow)


## <a name="home"></a> 1. Home - Bot flow 

This is a general (**Home**) flow that the bot follows irrespective of the training given to it. 
- There is always a [welcome message configured](https://docs.yellow.ai/docs/platform_concepts/getting-started/#21-configure-the-welcome-message) and displayed to the user.
- The bot responds to the queries it **understands** and **do not understand**.

Such a flow is configured on the Home -flow. It is further customized as per the use case.

![](https://i.imgur.com/Va9Vw6F.png)


> This flow is a basic architecture of the bot. 


In-depth about each of the nodes involved in this flow: 
1. **Welcome message**: This is the first message sent by the bot. 
You can click **Click here to add responses** and select the type of message that you wish to display to the user.

![](https://i.imgur.com/8BgBZ03.png)

:::info
Text can be entered in **Bot says** field. 
**Images**, **Carousel**, **Videos**, **Files** and **Quick replies** can also be added. 
When **Execute Flow** is selected, the start of the flow will be directed to the selected flow. 

![](https://i.imgur.com/6z77Gkt.jpg)

:::



2. **Callout**: These banners on top of the chat can be used to promote a brand and/or to get visitors from the host website to go to the advertiser's website.

![](https://i.imgur.com/f4LbObf.png)


:::info
You can add 4 callouts with 2 buttons each. 
Buttons can be further customised by clicking **Advanced Settings**.

![](https://i.imgur.com/BIyVT7R.jpg)

:::




> User responds to the bot question (that is mentioned along with the welcome message).



When bot understands a user response, it will try and fetch answers from: 

3. **Flows**: These are all the [flows (/categories)](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys#31-create-a-flow) which will get triggered based on the user response. 

4. **FAQs**: Bot check for replies in [FAQs](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs). 

![](https://i.imgur.com/8w80z8Q.png)


When the bot does not understand a user response, it will display the text mentioned in either of the below options:

5. **Suggestion**: Enable suggestions to display suggestions to this user. This can be used when you want to redirect a user in some way when the requested answer is not found. 

![](https://i.imgur.com/oMiE3Y6.jpg)

For example: 

> User: I want a triple berry sparkler. 
> Bot: I am sorry, would you like to look at our menu? 


6. **Document Search**: The bot responds to the user based on the data from the [uploaded document](https://docs.yellow.ai/docs/platform_concepts/studio/train/what-is-document-cognition). 
7. **Fallback**: Fallback occurs when the solution for what the user has asked was not found anywhere.

:::info
Text can be entered in **Bot says** field. 
**Images**, **Carousel**, **Videos**, **Files** and **Quick replies** can also be added. 
When **Execute Flow** is selected, the flow will be directed to the selected flow. 
:::

![](https://i.imgur.com/mFNMSbl.png)




----


## <a name="createflow"></a> 2. Introdution to flow

Flow is the logical design of your conversational flow, which will be the actual path that the end users will go through.
    
---
- User: “Show me the menu”
- Bot: “Please select your Cuisine: South Indian, North Indian”
- User: “South Indian”
- Bot: “Please select the Item: Dosa, Pongal . . .”
---
  

Once you have the scope of your bot ready, depending on the purpose user has for chatting with your bot, the bot must be built to respond accordingly. This is done by dividing the scope into multiple flows.

  

![](https://i.imgur.com/zroHc91.jpg)

  

Suppose the bot is used as an official portal to apply for leaves or check salary, bot must converse with the user and fetch the information from all the steps([Nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes)) to do just that.
    

> Flows can be further categorised using Categories.

----

:::note
The icons available on the side are shortcuts to access the following: 

![](https://i.imgur.com/3rEtjur.jpg)



| Icon                                                                                                                                         | Functionality                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Node navigator                                                                                                                               | Used to navigate to a specific node. You can also use it to filter and segregate nodes in your flow. |
| [Prompts](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes)                                                     | Shortcut to drag and drop prompt nodes.                                                              |
| [Message](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes)                                                    | Shortcut to drag and drop message nodes.                                                             |
| [Action](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes)                                                      | Shortcut to drag and drop action nodes.                                                              |
| [Logic](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes)                                                        | Shortcut to drag and drop logic nodes.                                                               |
| [Variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables)                                                        | Variables are used throught this module for multiple purposes.                                       |
| [Language](https://docs.yellow.ai/docs/platform_concepts/studio/languages-supported#2-add-languages)                                         | Select a language your bot is accessable in.                                                         |
| [Channel](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview) - Use to configure how bot functions in each channel. | ![](https://i.imgur.com/Jzrwr57.png)                                                                 |
| [Tools](https://docs.yellow.ai/docs/platform_concepts/studio/tools) |   Used to open the global tools tab.                                                                                                   |
:::








### 2.1 Create a flow

You must first create a flow and then trigger a flow. You can create a flow using a template or from scratch. When you create a flow from scratch, you create a placeholder for the flow first.

To create a flow, follow these steps:

1. Log in to your studio account. On the Overview page, select your bot. 
2. Select **Overview** > **Studio**.

> Learn more about [Studio](https://docs.yellow.ai/docs/platform_concepts/studio/overview#access-studio). 
    
3. Select **Flows** > Create flow.

![](https://i.imgur.com/YZXi95w.jpg)

:::tip
Keyboard shortcut to open flows `s` + `f`.
:::

4. If you want to select from the available template, click a suitable template.

![](https://i.imgur.com/K2blabe.jpg)

5. Otherwise, Click **Start from scratch** in the top menu bar.

![](https://i.imgur.com/npIk9X3.jpg)


6. Enter the following details:

*  **Flow name**: Name of the flow; make sure the name is according to the task of the flow. For example, flight booking, customer service, and products on discount.

*  **Flow Description**: Description of the flow; you can also convert the description into any language other than English by clicking the Google translator button. For example, these flows lead customers to flight booking workflow.

*  **Category**: One flow can have multiple categories. The created flow will fall into default categories if no category is mentioned. You can either select an existing category from the drop-down or, add a new category:

    1. Click **+Create category**.
    2. Enter the **Name** of the category.
    3. Click **Create Category** to save it.
*  **Create as a workflow**: Click on the right of the toggle if you want to convert the flow to a workflow. Workflows run in the back-end along with the conversational flow.

![](https://i.imgur.com/GS5ENuC.png)

7. Click **Save**.
8. Add [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes) and build a flow as per your use-case. 
--- 

## <a name="workflow"></a> 3. Workflow - a variant of flow

Workflows are background processes that run along with the conversational flow. **Workflow** option can be selected while creating a flow.

![](https://i.imgur.com/yMThz0H.png)

Workflow is the same as any other flow page, it will have a start node. Nodes connecting the start node can only be [Action](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes) or [Logic](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes) nodes (Message and Prompt nodes are not available to build a workflow).

![](https://i.imgur.com/7Wfp9Yz.png)

  
  
  
---

## <a name="triggerflow"></a> 4. Configure start trigger

To configure a start trigger, follow the steps below:

1. Open the bot **Studio** page.
2. Design bot flows > Flows tab. Click the Flows node of the bot. Expand a category and click a flow.

![](https://i.imgur.com/d1V0J56.png)

3. Click anywhere on the Start node.

![](https://i.imgur.com/uGpfjTZ.png)

4. In the Start trigger pop-up, select a type of trigger from the drop-down. In the Select field, select the value of the type of trigger.

![](https://i.imgur.com/uRV6zAC.png)

:::info
 Start trigger enables you to configure the initiation of a bot communication flow. When a customer types a query, the bot starts the conversation based on the logic of the trigger.
:::

Flow is triggered using one of the following:

*  **Intent**: Start the flow with an action statement, how to book a test drive, connect to a service centre, find the status of an order, and find the best product on a website. For example, if a customer types How to book a test ride, the bot triggers the configured flow of the *#test ride* intent. [Click here ](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents/)to learn more about intents.

![](https://i.imgur.com/24m919A.png)

*  **Entities**: Start the flow with the primary object(s) of a query, such as the cheapest flight, customer service number, sedan cars, rooms in a hotel, and best beauty products. For example, if a customer types studio, the bot triggers the configured flow associated with the studio model. [Click here ](https://docs.yellow.ai/docs/platform_concepts/studio/train/entities/#entity-types)to learn more about entities.


![](https://i.imgur.com/Y5dviXE.jpg)


*  **Event**: Start the flow with an event, such as a bot that pops up when a customer visits the Contact us page or the Home page of the website or app. [Click here ](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub/)to learn more about the configuration of events.

*  **Page Url**: Start a flow with a page Url. For example, triggering the help centre URL on the contact us page.

![](https://i.imgur.com/wt8EyFh.png)


*  **Execute Flow**: Apart from the start trigger, users can also set up when to trigger another flow manually from or inside a flow using Execute Flow action node.

    You can add an action node- **Execute Flow** and select the flow you want to execute next.

    For example, track your application, know your ID and view FAQs are three user responses linked to different flows (which are configured as separate flows). When one of the responses is sent, respective flows are executed.

![](https://i.imgur.com/zr7bkqW.jpg)

:::info
- Click **Add new trigger** to add additional triggers for the flow. You can train the bot with more than one start trigger to accommodate maximum use cases. Every trigger type has a logic for triggering the start of the communication. At least one logic must meet, when a customer is interacting with the website or application, to trigger the communication flow.

 ![](https://i.imgur.com/fF9TrGB.png)

- For example, a start trigger can have two events, three intents, and five entities. If you meet any conditions configured for the types of a trigger, the bot triggers the flow.
:::

---

## 5. Trigger the flow

When you are configuring a bot, there could be several complex flows in the bot. You need to always ensure whether the outcome of a flow is as desired before moving on to the next flow and it’s tedious to run the entire bot every time you make some change in a flow.

You just need to add a parameter to the URL or widget code to preview changes made in a particular flow of your bot. You no longer have to run through the entire bot flow every time you make some changes to a flow.

To preview a specific bot flow there are two methods, discussed in the further sections:
1. Via URL
2. Via Code

### 5.1 Trigger via. URL

To preview a bot via URL, follow the given steps:

1. Open the bot and navigate to **Studio** > **Flows**.
2. Click the Flows drop-down and select the flow that you want to preview.
3. Copy the path of the flow that you see in the URL (after `flow/`)

![](https://i.imgur.com/K9naz4Z.jpg)


4. Click Preview bot. You will see the entire bot flow in a new tab.
5. In the address bar, append `?ym.triggerJourney={flow path}`.

Example:
`https://cloud.yellow.ai/liveBot/x1635319612954?ym.triggerJourney=docs-feedback`

![](https://i.imgur.com/CLmlHyp.png)

Ensure that you clear the browser cache before you preview the bot. It is recommended to use Incognito mode or Private window to preview flows.

:::note
  * Use `?` to append right after the base URL of the bot. Example: https://cloud.yellow.ai/liveBot/x1635319612954?ym.triggerJourney=feedback
  * Use & if you want to append it after a variable. Example: https://cloud.yellow.ai/liveBot/x1635319612954?region=&ym.triggerJourney=feedback
:::
  

### 5.2 Trigger via. code

To preview a bot via code (embedded on your website), follow the steps below:

1. Get the path of the flow as explained in the previous section.
2. In `window.ymConfig`, pass the parameter `triggerJourney` and specify the path of the flow you copied.

```
<script type = "text/javascript" >
    window.ymConfig = {
        "bot": "x1625119673009",
        "host": "https://cloud.yellow.ai",
        triggerJourney: "malaga_vftkqv"
    };
(function() {
    var w = window,
        ic = w.YellowMessenger;
    if ("function" === typeof ic) ic("reattach_activator"), ic("update", ymConfig);
    else {
        var d = document,
            i = function() {
                i.c(arguments)
            };

        function l() {
            var e = d.createElement("script");
            e.type = "text/javascript", e.async = !0, e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";
            var t = d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        }
        i.q = [], i.c = function(e) {
            i.q.push(e)
        }, w.YellowMessenger = i, w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1)
    }
})(); 
</script>
```

3. Paste the code in the Header or body of your website as per your need to preview the flow.

---

**What Next?**

  

Series of **nodes** are used to create a flow. There are multiple nodes available on our platform.

* Learn about different **nodes** [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes/) and create a complete flow.
* [Test](https://docs.yellow.ai/docs/platform_concepts/studio/tools#21-test-your-bot) the flow.