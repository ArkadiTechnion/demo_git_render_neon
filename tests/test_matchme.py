import re

from playwright.sync_api import Page, expect


def test_homepage_loads(page: Page) -> None:
    page.goto("http://localhost:3000")

    expect(page).to_have_title(re.compile("MatchMe"))


def test_profiles_displayed(page: Page) -> None:
    page.goto("http://localhost:3000")

    profiles = page.locator(".profile-card")
    expect(profiles.first).to_be_visible()
    assert profiles.count() > 0


def test_like_button_works(page: Page) -> None:
    page.goto("http://localhost:3000")

    like_button = page.locator(".btn-like").first
    expect(like_button).to_be_visible()
    profiles = page.locator(".profile-card")
    profile_count_before = profiles.count()

    like_button.click()

    expect(profiles).to_have_count(profile_count_before - 1)
