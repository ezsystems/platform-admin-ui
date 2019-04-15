<?php

/**
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
namespace EzSystems\EzPlatformAdminUi\Behat\PageObject;

use EzSystems\EzPlatformAdminUi\Behat\Helper\UtilityContext;
use EzSystems\EzPlatformAdminUi\Behat\PageElement\AdminList;
use EzSystems\EzPlatformAdminUi\Behat\PageElement\Dialog;
use EzSystems\EzPlatformAdminUi\Behat\PageElement\ElementFactory;
use EzSystems\EzPlatformAdminUi\Behat\PageElement\NavLinkTabs;
use EzSystems\EzPlatformAdminUi\Behat\PageElement\Tables\SimpleListTable;
use EzSystems\EzPlatformAdminUi\Behat\PageElement\UniversalDiscoveryWidget;
use PHPUnit\Framework\Assert;

class RolePage extends Page
{
    /** @var string Name by which Page is recognised */
    public const PAGE_NAME = 'Role';
    /** @var string Name of actual group */
    public $roleName;

    private $activeAdminListContainerLocator = '.ez-main-container .tab-pane.active';

    /**
     * @var \EzSystems\EzPlatformAdminUi\Behat\PageElement\AdminList[]
     */
    public $adminLists;

    /**
     * @var \EzSystems\EzPlatformAdminUi\Behat\PageElement\AdminList
     */
    public $adminList;

    /**
     * @var \EzSystems\EzPlatformAdminUi\Behat\PageElement\Dialog
     */
    public $dialog;

    /**
     * @var AdminList|\EzSystems\EzPlatformAdminUi\Behat\PageElement\NavLinkTabs
     */
    public $navLinkTabs;

    private $assignTypeLabelMap = ['users' => 'Select users', 'groups' => 'Select groups'];

    public function __construct(UtilityContext $context, string $roleName)
    {
        parent::__construct($context);
        $this->route = '/admin/role/';
        $this->roleName = $roleName;
        $this->adminLists['Policies'] = ElementFactory::createElement($this->context, AdminList::ELEMENT_NAME, 'Policies', SimpleListTable::ELEMENT_NAME, $this->activeAdminListContainerLocator);
        $this->adminLists['Assignments'] = ElementFactory::createElement($this->context, AdminList::ELEMENT_NAME, 'Users and Groups', SimpleListTable::ELEMENT_NAME, $this->activeAdminListContainerLocator);
        $this->adminList = ElementFactory::createElement($this->context, AdminList::ELEMENT_NAME, '', SimpleListTable::ELEMENT_NAME, $this->activeAdminListContainerLocator);
        $this->navLinkTabs = ElementFactory::createElement($this->context, NavLinkTabs::ELEMENT_NAME);
        $this->dialog = ElementFactory::createElement($this->context, Dialog::ELEMENT_NAME);
        $this->pageTitle = sprintf('Role "%s"', $roleName);
        $this->pageTitleLocator = '.ez-header h1';
        $this->fields = [
            'assignButton' => '.btn-secondary',
        ];
    }

    /**
     * Verifies that all necessary elements are visible.
     */
    public function verifyElements(): void
    {
        $this->navLinkTabs->verifyVisibility();
        $this->adminLists['Policies']->verifyVisibility();
        $this->navLinkTabs->goToTab('Assignments');
        $this->adminLists['Assignments']->verifyVisibility();
    }

    /**
     * Verifies if list from given tab is empty.
     *
     * @param string $tabName
     */
    public function verifyListIsEmpty(string $tabName): void
    {
        $this->navLinkTabs->goToTab($tabName);
        if ($this->adminLists[$tabName]->table->getItemCount() > 0) {
            throw new \Exception(sprintf('"%s" list is not empty.', $tabName));
        }
    }

    public function startEditingItem(string $itemName): void
    {
        $this->navLinkTabs->goToTab('Policies');
        $this->adminLists['Policies']->table->clickEditButton($itemName);
    }

    public function startCreatingItem(): void
    {
        $this->navLinkTabs->goToTab('Policies');
        $this->adminLists['Policies']->clickPlusButton();
    }

    public function startAssigningToItem(string $roleName): void
    {
        Assert::assertEquals(
            $roleName,
            $this->roleName,
            'Wrong role page'
        );

        $this->navLinkTabs->goToTab('Assignments');
        $this->adminLists['Assignments']->clickAssignButton();
    }

    public function assignToRole(string $type, array $items): void
    {
        $this->context->getElementByText($this->assignTypeLabelMap[$type], $this->fields['assignButton'])->click();

        $udw = ElementFactory::createElement($this->context, UniversalDiscoveryWidget::ELEMENT_NAME);
        $udw->verifyVisibility();

        foreach ($items as $item) {
            $udw->selectContent($item);
        }

        $udw->confirm();
    }

    /**
     * Verifies if Role with Limitation from given list is present.
     *
     * @param string $listName
     * @param string $moduleAndFunction
     * @param string $limitation
     *
     * @return bool
     */
    public function isRoleWithLimitationPresent(string $listName, string $moduleAndFunction, string $limitation): bool
    {
        $policyExists = false;

        $this->navLinkTabs->goToTab($listName);
        $adminList = $this->adminLists[$listName];
        $actualPoliciesList = $adminList->table->getTableHash();

        $expectedModule = explode('/', $moduleAndFunction)[0];
        $expectedFunction = explode('/', $moduleAndFunction)[1];

        foreach ($actualPoliciesList as $policy) {
            if (
                $policy['Module'] === $expectedModule &&
                $policy['Function'] === $expectedFunction &&
                false !== strpos($policy['Limitations'], $limitation)
            ) {
                $policyExists = true;
            }
        }

        return $policyExists;
    }
}
